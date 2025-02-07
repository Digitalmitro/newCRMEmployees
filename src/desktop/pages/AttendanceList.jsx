function AttendanceList() {
  const data = [
    { Date: "2025-02-07", ClockIn: "08:00 AM", ClockOut: "05:00 PM", ProductionStatus: "Completed", WorkStatus: "Active" },
    { Date: "2025-02-06", ClockIn: "09:00 AM", ClockOut: "06:00 PM", ProductionStatus: "Pending", WorkStatus: "Active" },
    { Date: "2025-02-05", ClockIn: "07:30 AM", ClockOut: "04:30 PM", ProductionStatus: "Completed", WorkStatus: "Inactive" },
  ];
  return (
    <div className=" p-4">
      <div className="border-b border-gray-300 p-2">
      <h2 className="text-[15px] font-medium pb-2">View Calendar</h2>
      </div>
      <div className="pt-6 flex gap-4 justify-start">
        <button className="border px-4 rounded text-[12px] font-medium pt-1 pb-1">Select Month</button>
        <button className="border px-4 rounded text-[12px] font-medium pt-1 pb-1">Select Year</button>
        <button className="border px-4 rounded text-[12px] font-medium pt-1 pb-1">Select Date</button>
        <button className="border px-4 rounded text-[12px] font-medium pt-1 pb-1">Select Date</button>
      </div>
      <div className="pt-6 flex gap-4 justify-end">
        <button className="border border-gray-500 px-5 rounded-sm text-[12px] font-medium ">Late:0</button>
        <button className="border border-gray-500 px-5 rounded-sm text-[12px] font-medium ">Absent:0</button>
        <button className="border border-gray-500 px-5 rounded-sm text-[12px] font-medium ">Half Day:0</button>
      </div>
      <div className="overflow-x-auto p-4 mt-4">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-[#D9D9D9] ">
            <th className="border border-gray-400 px-4 py-2 text-[15px] font-medium pt-4 pb-4">Date</th>
            <th className="border border-gray-400 px-4 py-2 text-[15px] font-medium pt-4 pb-4">ClockIn</th>
            <th className="border border-gray-400 px-4 py-2 text-[15px] font-medium pt-4 pb-4">ClockOut</th>
            <th className="border border-gray-400 px-4 py-2 text-[15px] font-medium pt-4 pb-4">Production Status</th>
            <th className="border border-gray-400 px-4 py-2 text-[15px] font-medium pt-4 pb-4">Work Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-[10px] text-gray-500">
              <td className="border border-gray-300 px-4 py-2 text-center">{item.Date}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.ClockIn}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.ClockOut}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.ProductionStatus}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.WorkStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default AttendanceList;
