import React from "react";
import DatePicker from "react-datepicker";
// datepicker css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

import { BsCalendar } from "react-icons/bs";
import { useState } from "react";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);

  return (
    <div className="relative flex items-center justify-end h-full">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base"></BsCalendar>
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={startDate}
        placeholderText="Check In"
        onChange={(date) => setStartDate(date)}
      ></DatePicker>
    </div>
  );
};

export default CheckIn;
