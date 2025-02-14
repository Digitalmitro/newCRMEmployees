import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useAuth } from "../../context/authContext"; // Assuming you manage auth context

function ForgotClock() {
  const { userData } = useAuth(); // Get logged-in user data
  const [selectedDate, setSelectedDate] = useState(null);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!selectedDate || !comment) {
      alert("Please select a date and enter a comment.");
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
            "Authorization":`Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({
            ConcernDate: selectedDate.toISOString().split("T")[0], // Format date
            message: comment,
            concernType: "Forgot Clock",
          }),
        }
      );

      if (response.ok) {
        alert("Concern submitted successfully!");
        setSelectedDate(null);
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
    <div className="w-full p-4 border-b-2 border-orange-400 space-y-2">
      <h2 className="text-[14px] font-medium">Forgot to Clock</h2>

      {/* Date & Comment Input */}
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
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border px-4 py-2 w-full rounded text-[14px] outline-none border-gray-400"
        />
      </div>

      {/* Submit Button */}
      <div>
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

export default ForgotClock;
