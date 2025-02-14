import { useState, useEffect } from "react";

export default function NotesPage() {
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    alert("Notes saved!");
    setNotes("")
  };

  return (
    <div className="w-full   mt-10 p-4">
      <div className="p-4 bg-white">
        <h2 className="text-xl font-bold mb-2 text-gray-600">Notes</h2>
        <div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full  p-2 border rounded-lg outline-none  border-gray-500"
            placeholder="Write your notes here..."
            rows={12}
          />
          <div className="flex justify-end items-end mt-4">
          <button onClick={handleSave} className="border border-orange-500 font-medium text-[12px] py-0.5 text-orange-500 px-2 rounded cursor-pointer">
            Save Notes
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
