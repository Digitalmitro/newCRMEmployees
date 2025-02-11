import { useState, useEffect } from "react";

export default function NotesPage() {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const savedNotes = localStorage.getItem("userNotes");
    if (savedNotes) setNotes(savedNotes);
  }, []);

  const handleSave = () => {
    localStorage.setItem("userNotes", notes);
    alert("Notes saved!");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <div className="p-4 shadow-lg rounded-2xl border bg-white">
        <h2 className="text-xl font-bold mb-2">Your Notes</h2>
        <div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full h-60 p-2 border rounded-lg"
            placeholder="Write your notes here..."
          />
          <button onClick={handleSave} className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg">
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );
}
