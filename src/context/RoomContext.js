import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

import { roomData } from "../data";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kids');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });
  
  const handleClick = event => {
    event.preventDefault();
    
    const newRooms = roomData.filter(room => total <= room.maxPerson);
    setRooms(newRooms);
  }


  return (
    <RoomContext.Provider value={{rooms, adults, setAdults, kids, setKids, handleClick}}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
