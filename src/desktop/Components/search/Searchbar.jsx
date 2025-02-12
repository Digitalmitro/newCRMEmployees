import { useState } from "react";
import search from "../../../assets/desktop/search.svg";
import notificationIcon from "../../../assets/desktop/bell.png"; // Notification icon

function Searchbar() {
  const [unreadCount, setUnreadCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  const toggleSidebar = () => {
    console.log("Notification icon clicked!");
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="w-full border-b-2 border-orange-400 pt-6 px-6 flex justify-between relative">
      {/* Search Bar */}
      <div className="mb-6 bg-[#E3E3E3] w-[700px] rounded flex gap-2 px-4">
        <img src={search} alt="" />
        <input
          type="text"
          placeholder="Search"
          className="p-1 text-[13px] w-full border-none outline-none"
        />
      </div>

      {/* Notification Icon */}
      <div className="relative cursor-pointer" onClick={toggleSidebar}>
        <img src={notificationIcon} alt="Notifications" className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {unreadCount}
          </span>
        )}
      </div>

      {/* Notification Sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } p-4 z-50`}
      >
        <div className="flex justify-between items-center pb-4 border-b">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <button className="text-gray-600" onClick={toggleSidebar}>
            ✖
          </button>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">No new notifications</p>
        </div>
      </div>

      {/* Overlay to close sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default Searchbar;
