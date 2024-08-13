import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "antd";
import io from "socket.io-client";

const socket = io("http://localhost:3500");

const EmpMsg = () => {
  const [sendmessage, setSendMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const { TextArea } = Input;
  const [input, setInput] = useState('');

  const handleMessageChanged = (e) => {
    setMessage(e.target.value);
  };



  useEffect(() => {
    // Listen for incoming messages from the server
    socket.on('chat message', (msg) => {
        console.log("server on")
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Clean up when component unmounts
    return () => {
      socket.off('chat message');
    };
  }, []);
  const handleSendMessage = () => {
    setSendMessage((prev) => [...prev, input])
    socket.emit('chat message', input);
    setInput('');
};

  return (
    <div className="sending-messages text-center" style={{ height: "80vh" }}>
      <div
        className="row all-messages mx-auto"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          className="left-msg col-md-5"
          style={{
            border: "1px solid gray",
            display: "flex",
            alignItems: "center",
            borderRadius: "8px",
            background: "#d7997e",
            border: "none",
            fontSize: "0.8rem",
            padding: "10px",
            flexDirection: "column",
          }}
        >
            <ul>
                {sendmessage.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
        <div
          className="right-msg col-md-5"
          style={{
            border: "1px solid gray",
            marginTop: "6rem",
            display: "flex",
            alignItems: "center",
            borderRadius: "8px",
            background: "#d7997e",
            border: "none",
            fontSize: "0.8rem",
            padding: "10px",
          }}
        >
          <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
      </div>
      <div className="fixed-bottom">
        <input
          className="mx-auto"
          type="text"
          placeholder="Type your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "40%",
            height: "6vh",
            outline: "none",
            padding: "1rem",
            border: "none",
            boxShadow: "0 0 8px #616161",
          }}
        />
        <span style={{ paddingLeft: "10px" }} onClick={handleSendMessage }>
          <svg
            height="30px"
            width="30px"
            viewBox="0 0 28 28"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>ic_fluent_send_28_filled</title>
              <desc>Created with Sketch.</desc>
              <g
                id="🔍-Product-Icons"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="ic_fluent_send_28_filled"
                  fill="#f24e1e"
                  fillRule="nonzero"
                >
                  <path
                    d="M3.78963301,2.77233335 L24.8609339,12.8499121 C25.4837277,13.1477699 25.7471402,13.8941055 25.4492823,14.5168992 C25.326107,14.7744476 25.1184823,14.9820723 24.8609339,15.1052476 L3.78963301,25.1828263 C3.16683929,25.4806842 2.42050372,25.2172716 2.12264586,24.5944779 C1.99321184,24.3238431 1.96542524,24.015685 2.04435886,23.7262618 L4.15190935,15.9983421 C4.204709,15.8047375 4.36814355,15.6614577 4.56699265,15.634447 L14.7775879,14.2474874 C14.8655834,14.2349166 14.938494,14.177091 14.9721837,14.0981464 L14.9897199,14.0353553 C15.0064567,13.9181981 14.9390703,13.8084248 14.8334007,13.7671556 L14.7775879,13.7525126 L4.57894108,12.3655968 C4.38011873,12.3385589 4.21671819,12.1952832 4.16392965,12.0016992 L2.04435886,4.22889788 C1.8627142,3.56286745 2.25538645,2.87569101 2.92141688,2.69404635 C3.21084015,2.61511273 3.51899823,2.64289932 3.78963301,2.77233335 Z"
                    id="🎨-Color"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default EmpMsg;
