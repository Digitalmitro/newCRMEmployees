import { useState } from "react";
import profile from "../../assets/desktop/profileIcon.svg";
import { Send } from "lucide-react";
import { useLocation } from "react-router-dom";

function Chat() {
  const location=useLocation()
  const user = location.state;
  console.log("chat",user)
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! How can I help you?", sender: "bot" },
      ]);
      const [input, setInput] = useState("");
    
      const sendMessage = () => {
        if (input.trim() === "") return;
        
        const newMessage = { id: messages.length + 1, text: input, sender: "user" };
        setMessages([...messages, newMessage]);
        setInput("");
      };
    
  return (
    <div className="p-4 w-full flex  flex-col h-[500px]">
      <div className="flex  gap-4 mb-6 border-b  pt-2 px-8 pb-2   ">
        <img
          src={profile}
          alt="Profile"
          className=" rounded-full border items-center border-gray-300 object w-10 h-10 object-cover"
        />
        <div>
          <h2 className="text-sm font-semibold">{user.name}</h2>
          <p className="text-[10px] text-green-500 font-semibold">Active</p>
        </div>
      
      </div>
     
        <div className="flex-1 p-4 overflow-y-auto scrollable mb-10">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 max-w-xs rounded-lg mb-2
                 
                 ${
                msg.sender === "user" ? "bg-gradient-to-r from-orange-400 to-yellow-700 text-white ml-auto" : "bg-gradient-to-l from-gray-700 to-gray-500 text-white"
              }`}
              style={{
                width: `${Math.min(msg.text.length * 20, 300)}px`, 
              }}
            >
              {msg.text} 
            </div>
          ))}
        </div>
        
        {/* Message Input */}
        <div className="p-4 bg-white flex items-center border-t fixed bottom-0 w-[65%]">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg outline-none text-[15px] w-full"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} className="ml-2 p-2 bg-orange-400 text-white rounded-lg">
            <Send className="w-5 h-5" />
          </button>
        </div>
    </div>
  );
}

export default Chat;
