import { useEffect, useState} from "react";
import search from "../../../assets/desktop/search.svg";

import notificationIcon from "../../../assets/desktop/bell.png"; // Add a notification icon

function Searchbar() {
  const [unreadCount, setUnreadCount] = useState(0);
  return (
    <div className="w-full border-b-2 border-orange-400 pt-6 px-6 flex justify-between">
      {/* Search Bar */}
      <div className="mb-6 bg-[#E3E3E3] w-[700px] rounded flex gap-2 px-4 ">
        <img src={search} alt="" />
        <input
          type="text"
          placeholder="Search"
          className="p-1 text-[13px] w-full border-none outline-none"
        />
      </div>
      {/* Notification Icon */}
      <div className="relative cursor-pointer">
        <img src={notificationIcon} alt="Notifications" className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {unreadCount}
          </span>
        )}
      </div>
    </div>
  )
}

export default Searchbar