import { useNavigate } from "react-router-dom";

function CallbackList() {
   const navigate=useNavigate()
        const dummyData = [
            {
              createdDate: "2024-02-10",
              name: "John Doe",
              phone: "+1 234 567 8901",
              email: "johndoe@example.com",
              view: "View",
              status: "Active",
            },
            {
              createdDate: "2024-02-09",
              name: "Jane Smith",
              phone: "+44 789 123 4567",
              email: "janesmith@example.com",
              view: "View",
              status: "Inactive",
            },
            {
              createdDate: "2024-02-08",
              name: "Robert Johnson",
              phone: "+91 98765 43210",
              email: "robertj@example.com",
              view: "View",
              status: "Pending",
            },
            {
              createdDate: "2024-02-07",
              name: "Emily Davis",
              phone: "+61 456 789 012",
              email: "emilyd@example.com",
              view: "View",
              status: "Active",
            },
            {
              createdDate: "2024-02-06",
              name: "Michael Brown",
              phone: "+33 612 345 678",
              email: "michaelb@example.com",
              view: "View",
              status: "Inactive",
            },
          ];
          
          const handleNavigate=()=>{
            navigate("/callback")
          }
    
  return (
    <div className=" p-4">
      <div className="border-b border-gray-300 p-4 flex justify-between">
        <h2 className="text-[15px] font-medium pb-2">View Callback</h2>
        <button className="border  border-orange-500 text-[12px] py-0.5 text-orange-500 px-2 rounded cursor-pointer" onClick={handleNavigate}>Create Callback</button>
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
            {dummyData.map((item, index) => (
              <tr key={index} className="text-[13px] text-gray-500">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.createdDate}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.email}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  View More
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CallbackList