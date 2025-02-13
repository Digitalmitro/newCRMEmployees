import { useEffect, useState, useRef } from "react";
import axios from "axios";
import profile from "../../assets/desktop/profileIcon.svg";
import { Send } from "lucide-react";
import { useLocation } from "react-router-dom";
import { sendMessage, onMessageReceived, connectSocket } from "../../utils/socket";
import { useAuth } from "../../context/authContext";

const Chat = () => {
  const location=useLocation()
  const user = location.state;
  const receiverId= user?.id
  const { userData } = useAuth();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null); // For auto-scrolling
  const senderId = userData?.userId

  // ✅ Load chat history on mount
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/message/messages/${senderId}/${receiverId}`);
        setMessages(res.data?.messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    if (senderId && receiverId) {
      fetchMessages();
    }
 
    connectSocket();

    onMessageReceived((newMessage) => {
      if (
        (newMessage.sender === senderId && newMessage.receiver === receiverId) ||
        (newMessage.sender === receiverId && newMessage.receiver === senderId)
      ) {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    });

    return () => {
      console.log("🛑 Unsubscribing from message listener");
    };
  }, [senderId, receiverId]);


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: senderId, receiver: receiverId, message: input };

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_API}/message/send-message`, newMessage);
      sendMessage(receiverId, input); 
      setMessages((prevMessages) => [...prevMessages, newMessage]); 
      setInput(""); 
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="p-4 w-full flex flex-col h-[500px]">
      {/* Chat Header */}
      <div className="flex gap-4 mb-6 border-b pt-2 px-8 pb-2">
        <img
          src={profile}
          alt="Profile"
          className="rounded-full border border-gray-300 w-10 h-10 object-cover"
        />
        <div>
          <h2 className="text-sm font-semibold">{user?.name}</h2>
          <p className="text-[10px] text-green-500 font-semibold">Active</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto scrollable mb-10">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 max-w-xs rounded-lg mb-2
              ${msg.sender === senderId ? "bg-orange-500 text-white ml-auto" : "bg-gray-700 text-white"}
            `}
            style={{ width: `${Math.min(msg.message.length * 20, 300)}px` }}
          >
            {msg.message}
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* Auto-scroll anchor */}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white flex items-center border-t fixed bottom-0 w-[65%]">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg outline-none text-[15px] w-full"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button onClick={handleSendMessage} className="ml-2 p-2 bg-orange-400 text-white rounded-lg">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Chat;