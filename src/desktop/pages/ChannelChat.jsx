import { useState, useRef, useEffect } from "react";
import { IoPeopleSharp } from "react-icons/io5";
import { Send } from "lucide-react";
import moment from "moment";
import { useLocation } from "react-router";
import { useAuth } from "../../context/authContext";

const ChannelChat = () => {
  const {userData}=useAuth()
  const [messages, setMessages] = useState([
    { id: 1, sender: "me", message: "Hello!", createdAt: new Date() },
    { id: 2, sender: "you", message: "Hi there!", createdAt: new Date() },
  ]);
  const location=useLocation()
  const groupUsers=location.state;
  
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      sender: "me",
      message: input,
      createdAt: new Date(),
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="p-4 w-full flex flex-col h-[500px]">
      {/* Header */}
      <div className="flex gap-4 mb-6 border-b pt-2 px-8 pb-2">
        <div className="flex items-center gap-4 ">
          <p className=" rounded-full border items-center text-[12px] flex justify-center w-10 h-10  font-medium text-white bg-orange-500">
            Group
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold">{groupUsers.name.charAt(0).toUpperCase() + groupUsers.name.slice(1)}</h2>
          <p className="text-[10px] text-green-500 font-semibold">Active</p>
        </div>
       <div className="flex items-center space-x-2">
       <IoPeopleSharp />
       <p className="text[10px]">(2)</p>
       </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto scrollable mb-10">
        {messages.map((msg) => (
          <div key={msg.id}>
            {/* <div className="flex gap-2 mb-2">
            <span className="text-white text-[13px] bg-black font-medium rounded-full w-5 h-5 px-2 items-center flex justify-center">{userData?.name?.charAt(0)}</span>
            <p className="text-[12px]">{userData?.name}</p>
            </div> */}
          <div
            
            className={`pt-2 pb-2 px-2 max-w-xs rounded-lg mb-2 flex flex-col 
            ${
              msg.sender === "me"
                ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white ml-auto"
                : "bg-gradient-to-l from-gray-500 to-gray-700 text-white"
            }`}
            style={{
              width: `${
                msg.message.length <= 5
                  ? 90
                  : Math.min((msg.message?.length ?? 0) * 15, 300)
              }px`,
            }}
          > 
          
          <div className="flex gap-2">
           
            <span>{msg.message}</span>
          </div>
            <span className="text-[9px] flex justify-end">
              {moment(msg.createdAt).format("HH:mm")}
            </span>
          </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white flex items-center border-t fixed bottom-0 w-[65%] space-x-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg outline-none text-[15px] w-full"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 bg-orange-400 text-white rounded-lg"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChannelChat;
