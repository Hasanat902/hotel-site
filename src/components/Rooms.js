import React from "react";

import { RoomContext } from "../context/RoomContext";
import Room from "../components/Room";
import { useContext } from "react";

const Rooms = () => {
  const { rooms } = useContext(RoomContext);

  return (
    <section className="py-24">
      <div className="container mx-auto lg:px-0">
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {rooms.map(room => <Room room={room} key={room.id}></Room>)}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
