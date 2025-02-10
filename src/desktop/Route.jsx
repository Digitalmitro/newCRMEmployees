import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebarpart from "./Components/Sidebar/Sidebarpart";
import Attendance from "./pages/Attendance";
import Searchbar from "./Components/search/Searchbar";
import Chat from "./pages/Chat";
import CreateChannel from "./pages/CreateChannel";
import AddChannelPeople from "./pages/AddChannelPeople";
import AttendanceList from "./pages/AttendanceList";
import BookLeave from "./pages/BookLeave";
import NotificationPage from "./pages/Notification";

function DesktopRouting() {
  return (
    <div className="flex">
      <Sidebarpart />
      {/* Main Content */}
      <div className="flex-1 border border-orange-400 min-h-screen">
      <Searchbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/create-channel" element={<CreateChannel />} />
          <Route path="/addpeople-channel" element={<AddChannelPeople />} />
          <Route path="/attendance-list" element={<AttendanceList />} />
          <Route path="/book-leave" element={<BookLeave />} />
          <Route path="/notification" element={<NotificationPage/>} />
        </Routes>
      </div>
    </div>
  );
}
export default DesktopRouting;
