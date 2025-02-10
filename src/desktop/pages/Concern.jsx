import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Concern() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className="w-full p-4  space-y-2 ">
      <div className="border-b-2 border-gray-300 p-2">
      <h2 className="text-[14px] font-medium">Employee Concern</h2>
      </div>

      <div className="flex items-center space-x-4 pt-4">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select a Date"
          className="border px-4 py-2 outline-none border-gray-400 text-[12px] rounded"
        />

        <input
          type="text"
          placeholder="Comment"
          className="border px-4 py-2 w-[70%] rounded text-[14px] outline-none border-gray-400"
        />

       
      </div>

      <div className="flex space-x-4">
      <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Actual in Time"
          className="border px-4 py-2 outline-none border-gray-400 text-[12px] rounded"
        />

        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Actual out Time"
          className="border px-4 py-2 outline-none border-gray-400 text-[12px] rounded"
        />
      </div>
      <div className="pt-4">
        <button className="text-[12px] text-orange-400 border border-orange-400 rounded px-3 cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Concern;
