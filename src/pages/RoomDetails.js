import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AdultsDropdown from "../components/AdultsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import KidsDropdown from "../components/KidsDropdown";
import { RoomContext } from "../context/RoomContext";
import { FaCheck } from "react-icons/fa";

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  const room = rooms.find((room) => room.id === Number(id));

  const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary text-center">{name} Details</h1>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img src={imageLg} alt="" />
            <div className="mt-12">
              <h3 className="h3 mb-3 ">Room Facilities</h3>
              <p className="mb-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam autem, aut eligendi nobis totam maiores assumenda cupiditate dicta vitae error blanditiis ducimus molestiae quis atque libero dolorum dignissimos incidunt minima.</p>
              <div className="grid grid-cols-3 gap-6 mb-6">
                {
                  facilities.map((item, index) => <div className="flex items-center gap-x-3 flex-1" key={index}>
                    <div className="text-3xl text-accent">{item.icon}</div>
                    <div className="text-base">{item.name}</div>
                  </div>)
                }
              </div>
            </div>
          </div>
          <div className="w-full h-full lg:w-[40%]">
            {/* reservation */}
           <div className="py-8 px-6 bg-accent/20 mb-6">
                <div className="flex flex-col space-y-4 mb-4">
                  <h3>Your Reservation</h3>
                  <div className="h-[60px]">
                    <CheckIn></CheckIn>
                  </div>
                  <div className="h-[60px]">
                    <CheckOut></CheckOut>
                  </div>
                  <div className="h-[60px]">
                    <AdultsDropdown></AdultsDropdown>
                  </div>
                  <div className="h-[60px]">
                    <KidsDropdown></KidsDropdown>
                  </div>
                  <div>
                    <button className="btn btn-lg btn-primary w-full">book now for ${price}</button>
                  </div>
                </div>
           </div>
           {/* Rules */}
            <div>
              <h3 className="h3">Hotel Rules</h3>
              <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fuga inventore ullam!</p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent"></FaCheck>
                  Check in: 3.00 PM - 9.00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent"></FaCheck>
                  Check out: 10.00 AM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent"></FaCheck>
                  No Pets
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent"></FaCheck>
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
