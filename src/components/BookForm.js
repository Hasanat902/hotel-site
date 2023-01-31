import React from "react";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import AdultsDropdown from "./AdultsDropdown";
import KidsDropdown from "./KidsDropdown";
import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";

const BookForm = () => {
  const {handleClick} = useContext(RoomContext);

  return (
    <form className="h-[300px] w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border-r">
          <CheckIn></CheckIn>
        </div>
        <div className="flex-1 border-r">
          <CheckOut></CheckOut>
        </div>
        <div className="flex-1 border-r">
          <AdultsDropdown></AdultsDropdown>
        </div>
        <div className="flex-1 border-r">
          <KidsDropdown></KidsDropdown>
        </div>
        <button onClick={(e) => handleClick(e)} type="submit" className="btn btn-primary">Check now</button>
      </div>
    </form>
  );
};

export default BookForm;
