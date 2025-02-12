import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function AttendanceList() {
  const [attendance, setAttendance] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const { fetchAttendance } = useAuth();
  const lateCount = attendance.filter((item) => item.status === "Late").length;
  const absentCount = attendance.filter(
    (item) => item.workStatus === "Absent"
  ).length;
  const halfCount = attendance.filter(
    (item) => item.workStatus === "Half Day"
  ).length;
  console.log("show this", lateCount);

  const getAddentanceData = async () => {
    const data = await fetchAttendance("this_month");
    if (data) {
      console.log("data", data?.data?.[0]);
      setAttendance(data?.data);
    }
  };

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
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM"
            showMonthYearPicker
            placeholderText="Select a Month"
            className="border px-4  outline-none border-none text-[12px] "
          />
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
          Late:{lateCount}
        </button>
        <button className="border border-gray-500 px-5 rounded-sm text-[12px] font-medium ">
          Absent:{absentCount}
        </button>
        <button className="border border-gray-500 px-5 rounded-sm text-[12px] font-medium ">
          Half Day:{halfCount}
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
                Status
              </th>
              <th className="border border-gray-400 px-4 py-2 text-[15px] font-medium pt-4 pb-4">
                Production
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
                  {moment(item?.currentDate).format("YYYY-MM-DD")}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {moment(item?.firstPunchIn).format("HH:mm")}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {moment(item?.punchOut).format("HH:mm")}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item?.status}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {moment
                    .utc(item?.workingTime * 60 * 1000)
                    .format("H [hr] m [mins]")}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item?.workStatus}
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
