import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function CallbackList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5;
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      const response = await fetch(`http://localhost:5001/callback/all?page=${page}&limit=${limit}`);
      const result = await response.json();
      setData(result.data || []);
      setTotalPages(result.totalPages || 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const dummyData = [
    {
      createdDate: "2024-02-10",
      createdBy: "Admin",
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+1 234 567 8901",
      callDate: "2024-02-11",
      domainName: "example.com",
      address: "123 Street, NY",
      comments: "Interested in automation",
      budget: "$5,000",
      sentTo: "Sales Team",
    },
    {
      createdDate: "2024-02-09",
      createdBy: "Manager",
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "+44 789 123 4567",
      callDate: "2024-02-10",
      domainName: "smart-home.com",
      address: "456 Avenue, UK",
      comments: "Looking for a demo",
      budget: "$3,000",
      sentTo: "Support Team",
    },
  ];

  const handleNavigate = () => {
    navigate("/callback");
  };

  return (
    <div className="p-4">
      <div className="border-b border-gray-300 p-4 flex justify-between">
        <h2 className="text-[15px] font-medium pb-2">View Callback</h2>
        <button
          className="border border-orange-500 text-[12px] py-0.5 text-orange-500 px-2 rounded cursor-pointer"
          onClick={handleNavigate}
        >
          Create Callback
        </button>
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
      {/* Table */}
      <div className="overflow-x-auto p-4 mt-4">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#D9D9D9] text-[14px]">
              <th className="border px-3 py-2">Created Date</th>
              {/* <th className="border px-3 py-2">Created By</th> */}
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Email</th>
              <th className="border px-3 py-2">Phone</th>
              {/* <th className="border px-3 py-2">Call Date</th> */}
              <th className="border px-3 py-2">Domain Name</th>
              <th className="border px-3 py-2">Address</th>
              {/* <th className="border px-3 py-2">Comments</th>
              <th className="border px-3 py-2">Budget</th>
              <th className="border px-3 py-2">Sent To</th>
              <th className="border px-3 py-2">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {(data.length > 0 ? data : dummyData).map((item, index) => (
              <tr key={index} className="text-[13px] text-gray-500 text-center">
                <td className="border px-3 py-2">{item.createdDate}</td>
                {/* <td className="border px-3 py-2">{item.createdBy}</td> */}
                <td className="border px-3 py-2">{item.name}</td>
                <td className="border px-3 py-2">{item.email}</td>
                <td className="border px-3 py-2">{item.phone}</td>
                {/* <td className="border px-3 py-2">{item.callDate}</td> */}
                <td className="border px-3 py-2">{item.domainName}</td>
                {/* <td className="border px-3 py-2">{item.address}</td> */}
                {/* <td className="border px-3 py-2">{item.comments}</td>
                <td className="border px-3 py-2">{item.budget}</td>
                <td className="border px-3 py-2">{item.sentTo}</td> */}
                <td className="border px-3 py-2">
                  <button className="border border-orange-500 text-[12px] py-0.5 text-orange-500 px-2 rounded cursor-pointer">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          className="px-3 py-1 mx-1 border rounded bg-gray-200"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span className="px-4 py-1 border bg-gray-100 rounded">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-3 py-1 mx-1 border rounded bg-gray-200"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CallbackList;
