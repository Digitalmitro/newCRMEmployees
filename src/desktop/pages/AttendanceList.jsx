import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import moment from "moment";
function AttendanceList() {
  const [attendance, setAttendance] = useState([]);
  const { fetchAttendance } = useAuth();

  const getAddentanceData = async () => {
    const data = await fetchAttendance("today");
    if (data) {
      console.log("data", data?.data?.[0]);
      setAttendance(data?.data);
    }
  };
  const dateFormat=moment(attendance.currentDate).format("YYYY-MM-DD")
  const clockinTime = moment(attendance.currentDate).format("HH:mm");
  const clockoutTime =moment(attendance.punchOut).format("HH:mm");

  useEffect(() => {
    getAddentanceData();
  }, []);

  return (
    <div className=" p-4">
      <div className="border-b border-gray-300 p-2">
        <h2 className="text-[15px] font-medium pb-2">View Calendar</h2>
      </div>
      <div className="pt-6 flex gap-4 justify-start">
        <button className="border px-4 rounded text-[12px] font-medium pt-1 pb-1">
          Select Month
        </button>
        <button className="border px-4 rounded text-[12px] font-medium pt-1 pb-1">
          Select Year
        </button>
        <button className="border px-4 rounded text-[12px] font-medium pt-1 pb-1">
          Select Date
        </button>
        <button className="border px-4 rounded text-[12px] font-medium pt-1 pb-1">
          Select Date
        </button>
      </div>
      <div className="pt-6 flex gap-4 justify-end">
        <button className="border border-gray-500 px-5 rounded-sm text-[12px] font-medium ">
          Late:0
        </button>
        <button className="border border-gray-500 px-5 rounded-sm text-[12px] font-medium ">
          Absent:0
        </button>
        <button className="border border-gray-500 px-5 rounded-sm text-[12px] font-medium ">
          Half Day:0
        </button>
      </div>
      <div className="overflow-x-auto p-4 mt-4">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#D9D9D9] ">
              <th className="border border-gray-400 px-4 py-2 text-[15px] font-medium pt-4 pb-4">
                Date
              </th>
              <th className="border border-gray-400 px-4 py-2 text-[15px] font-medium pt-4 pb-4">
                ClockIn
              </th>
              <th className="border border-gray-400 px-4 py-2 text-[15px] font-medium pt-4 pb-4">
                ClockOut
              </th>
              <th className="border border-gray-400 px-4 py-2 text-[15px] font-medium pt-4 pb-4">
                Production Status
              </th>
              <th className="border border-gray-400 px-4 py-2 text-[15px] font-medium pt-4 pb-4">
                Work Status
              </th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((item, index) => (
              <tr key={index} className="text-[13px] text-gray-500">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {dateFormat}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {clockinTime}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {clockoutTime}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.status}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.workStatus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttendanceList;
