
import { useState } from "react";
import search from "../../assets/desktop/search.svg";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const dummyPeople = [
  "Twinkle Shaw",
  "Soumen Maity",
  "Moni Shaw",
  "Sriti",
  "Sunit",
  "Sagar",
  "Sayani"
];



function AddChannelPeople() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState(dummyPeople);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredPeople(
      dummyPeople.filter((person) =>
        person.toLowerCase().includes(value.toLowerCase())
      )
    );
    setShowDropdown(value.length > 0);
  };

  const handleSelectPerson = (person) => {
    if (!selectedPeople.includes(person)) {
      setSelectedPeople([...selectedPeople, person]);
    }
    setSearchTerm(""); // Clear search field after selection
    setShowDropdown(false);
  };

  const removePerson = (person) => {
    setSelectedPeople(selectedPeople.filter((p) => p !== person));
  };

  return (
    <div className="relative w-full border-b-2 border-orange-400 p-4 space-y-2">
      <h2 className="text-[14px] font-medium">Add People</h2>

      {/* Search Box */}
      <div className="relative bg-gray-200 rounded flex gap-2 px-4 py-2">
        <img src={search} alt="Search" className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search for people"
          value={searchTerm}
          onChange={handleInputChange}
          className=" outline-none w-full  text-[12px] p-1"
        />
      </div>

      {/* Dropdown for Suggestions */}
      {showDropdown && filteredPeople.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow-md mt-1 z-10">
          {filteredPeople.map((person, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectPerson(person)}
            >
              {person}
            </div>
          ))}
        </div>
      )}

      {/* Selected People */}
      {selectedPeople.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {selectedPeople.map((person, index) => (
            <div
              key={index}
              className="bg-orange-200 text-orange-800 px-2 py-1 rounded flex items-center"
            >
              {person}
              <button
                onClick={() => removePerson(person)}
                className="ml-2 text-red-600 hover:text-red-800"
              >
                <IoIosClose  size={25}/>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Create Button */}
      <div className="flex justify-end">
      <button className="text-[12px] text-orange-400 border border-orange-400 rounded px-3 cursor-pointer" onClick={handlePeople}>
        Create
      </button>
      </div>
    </div>
  );
}

export default AddChannelPeople;
