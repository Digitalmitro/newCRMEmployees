import { useEffect, useState} from "react";
import search from "../../../assets/desktop/search.svg";
import  io  from "socket.io-client";
import notificationIcon from "../../../assets/desktop/bell.png"; // Add a notification icon
import { useAuth } from "../../../context/authContext";

function Searchbar() {
  const [socketConnected, setSocketConnected] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const { userData } = useAuth();
 console.log(userData)
  useEffect(() => {
    const socket = io(`${import.meta.env.NEXT_PUBLIC_SOCKET_BASE_URL || "http://localhost:5000"}`, {
      transports: ["websocket"],
    });

    socket.emit("setup", userData);

    socket.on("connected", () => setSocketConnected(true));
   
    return () => socket.disconnect();
  }, [userData]);

  // Request permission for system notifications
  useEffect(() => {
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  // Function to show browser notifications
  const showSystemNotification = (notification) => {
    if (Notification.permission === "granted") {
      new Notification("New Notification", {
        body: notification.message,
        icon: "/notification-icon.png",
      });
    }
  };

  // Function to play notification sound
  const playNotificationSound = () => {
    const audio = new Audio("/mixkit-software-interface-back-2575.wav"); // Add your sound file
    audio.play();
  };

console.log(socketConnected)
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