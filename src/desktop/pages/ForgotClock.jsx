import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function ForgotClock() {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
      <div className="w-full p-4 border-b-2 border-orange-400 space-y-2 ">
        <h2 className="text-[14px] font-medium">Book Leave</h2>
  
        <div className="flex items-center space-x-4">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a Date"
            className="border px-4 py-2 outline-none border-gray-400 text-[12px]"
          />
  
          <input
            type="text"
            placeholder="Comment"
            className="border px-4 py-2 w-full rounded text-[14px] outline-none border-gray-400"
          />
        </div>
        <div className="">
          <button className="text-[12px] text-orange-400 border border-orange-400 rounded px-3 cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    )
}

export default ForgotClock