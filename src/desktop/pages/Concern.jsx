import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "../../context/authContext";

function Concern() {
  const { userData } = useAuth();
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!selectedDate || !startDate || !endDate || !comment) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/concern/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            ConcernDate: selectedDate.toISOString().split("T")[0],
            ActualPunchIn: startDate.toISOString(),
            ActualPunchOut: endDate.toISOString(),
            message: comment,
            concernType: "Employee Concern",
          }),
        }
      );

      if (response.ok) {
        alert("Concern submitted successfully!");
        setSelectedDate(null);
        setStartDate(null);
        setEndDate(null);
        setComment("");
      } else {
        alert("Failed to submit concern.");
      }
    } catch (error) {
      console.error("Error submitting concern:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-4 space-y-2">
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
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border px-4 py-2 w-[70%] rounded text-[14px] outline-none border-gray-400"
        />
      </div>

      <div className="flex space-x-4">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          dateFormat="yyyy-MM-dd HH:mm"
          placeholderText="Actual in Time"
          className="border px-4 py-2 outline-none border-gray-400 text-[12px] rounded"
        />

        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          showTimeSelect
          dateFormat="yyyy-MM-dd HH:mm"
          placeholderText="Actual out Time"
          className="border px-4 py-2 outline-none border-gray-400 text-[12px] rounded"
        />
      </div>

      <div className="pt-4">
        <button
          onClick={handleSubmit}
          className="text-[12px] text-orange-400 border border-orange-400 rounded px-3 cursor-pointer"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default Concern;
