import { useState, useContext, useEffect, useRef } from "react";
import "./Chat.css";
import ChatEngine from "./ChatEngine";
import contextDarkMode from "../context/ContextDarkMode";
import Avatar from "../assets/jay.png";
const Chat = () => {
  const { isChatOpen, setIsChatOpen, toggleChat } = useContext(contextDarkMode);
  //  Close chat when click outside
  const ref = useRef<HTMLInputElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        //  remove the state local storage
        localStorage.removeItem("toggleChat");
        setIsChatOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="chatbox" ref={ref}>
      <div className="chatbox-wrapper">
        <div className={"chatbox-toggle"} onClick={toggleChat}>
          <i
            className={
              isChatOpen ? "bx bx-x chatbox-close" : "bx bx-chat chatbox-open"
            }
            aria-hidden="true"
          ></i>
        </div>

        <div
          className={`${
            isChatOpen
              ? "chatbox-message-wrapper"
              : "chatbox-message-wrapper-close"
          } `}
        >
          <div className="chatbox-message-header">
            <div className="chatbox-message-profile">
              <img
                src={
                  "https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78="
                }
                alt=""
                className="chatbox-message-image"
              />
              <div className="chatbox-message-name-status">
                {/* <h4 className="chatbox-message-name">Jay Watson</h4> */}
                <p className="chatbox-message-status">
                  (online)
                  <i className="bx bx-circle" />
                </p>
              </div>
            </div>
            <div className="chatbox-message-close" onClick={toggleChat}>
              <i className="bx bx-x chatbox-close chatbox-message-dropdown-toggle" />
            </div>
          </div>

          {<ChatEngine />}
        </div>
      </div>
    </div>
  );
};
export default Chat;
