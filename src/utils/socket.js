// src/utils/socket.js
import { io } from "socket.io-client";
import { jwtDecode } from "jwt-decode";

const SERVER_URL = "http://localhost:5000"; // Change if using a different backend URL
const socket = io(SERVER_URL, { autoConnect: false, reconnection: true });

const requestNotificationPermission = async () => {
  if ("Notification" in window) {
    if (Notification.permission === "default") {
      await Notification.requestPermission();
    }
  }
};

// Show a browser notification
const showNotification = (title, body) => {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, {
      body,
      icon: "/logo192.png", // Change to your app's icon
    });
  }
};


// Function to connect and authenticate socket
export const connectSocket = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.warn("No token found in localStorage. Socket will not connect.");
    return;
  }
  requestNotificationPermission();



  socket.auth = { token };
  socket.connect();

  socket.on("connect", () => {
    // console.log("✅ Socket connected:", socket.id);
    socket.emit("authenticate", token);
  });

  socket.on("authenticated", (data) => {
    // console.log("✅ User authenticated:", data);
  });

  socket.on("unauthorized", (msg) => {
    console.error("❌ Unauthorized:", msg);
    socket.disconnect();
  });

  socket.on("disconnect", (reason) => {
    console.warn("⚠️ Socket disconnected:", reason);
  });

  socket.on("connect_error", (error) => {
    console.error("❌ Socket connection error:", error.message);
  });
};

// Function to send a real-time message
export const sendMessage = (receiver, message) => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const sender = jwtDecode(token).userId;
    socket.emit("send-message", { sender, receiver, message });
  } catch (error) {
    console.error("Error decoding token:", error);
  }
};

// Function to send a real-time notification
export const sendNotification = (userId, title, description) => {
  socket.emit("send-notification", { userId, title, description });
  
};

// Listen for incoming messages
export const onMessageReceived = (callback) => {
  socket.on("receive-message", (message) => {
    callback(message);
  });
};


// export const onNotificationReceived = (callback) => {
  socket.on("receive-notification", (notification) => {
    // callback(notification);
    // console.log(notification);

    // ✅ Show browser notification for alerts
    showNotification(notification.title, notification.description);
  });
// };

// Disconnect socket
export const disconnectSocket = () => {
  console.log("🔌 Disconnecting socket...");
  socket.disconnect();
};

export default socket;
