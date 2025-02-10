import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebarpart from "./Components/Sidebar/Sidebarpart";
import Attendance from "./pages/Attendance";
import Searchbar from "./Components/search/Searchbar";
import Chat from "./pages/Chat";
import CreateChannel from "./pages/CreateChannel";
import AddChannelPeople from "./pages/AddChannelPeople";
import AttendanceList from "./pages/AttendanceList";
import BookLeave from "./pages/BookLeave";
import Callback from "./pages/Callback";
import Transfer from "./pages/Transfer";
import Sales from "./pages/Sales";
import CallbackList from "./pages/CallbackList";
import TransferList from "./pages/TransferList";
import SalesList from "./pages/SalesList";
import Concern from "./pages/Concern";
import Login from "./pages/Login";
import { useAuth } from "../context/authContext";

function DesktopRouting() {
  const {token}=useAuth();
  return (
    <Routes>
      
      {!token ? (
        <Route path="*" element={<Login />} />
      ) : (
        <Route
          path="*"
          element={
            <div className="flex">
              <Sidebarpart />
              <div className="flex-1 border border-orange-400 min-h-screen">
                <Searchbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/attendance" element={<Attendance />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/create-channel" element={<CreateChannel />} />
                  <Route path="/addpeople-channel" element={<AddChannelPeople />} />
                  <Route path="/attendance-list" element={<AttendanceList />} />
                  <Route path="/book-leave" element={<BookLeave />} />
                  <Route path="/callback" element={<Callback />} />
                  <Route path="/transfer" element={<Transfer />} />
                  <Route path="/sales" element={<Sales />} />
                  <Route path="/callbacklist" element={<CallbackList />} />
                  <Route path="/transferlist" element={<TransferList />} />
                  <Route path="/saleslist" element={<SalesList />} />
                  <Route path="/concern" element={<Concern />} />
                  <Route path="/login" element={<Navigate to="/" />} />
                </Routes>
              </div>
            </div>
          }
        />
      )}
    </Routes>
  );
}

export default DesktopRouting;
