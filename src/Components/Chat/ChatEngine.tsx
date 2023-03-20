import { FC, useContext, useEffect, useState } from "react";
import contextDarkMode from "../context/ContextDarkMode";

const ChatEngine: FC = () => {
  const audio = new Audio(
    "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
  );
  interface IChatBotMessage {
    user: string;
    message: string;
    options: string[];
    response?: string;
  }

  // Generate a chatBot messages options for the user to choose from and send to the chatBot to get a response from the chatBot
  const [chatBotMessages, setChatBotMessages] = useState([
    {
      user: "chatBot",
      message: "Hello, I am the chatBot. How can I help you?",
      options: [
        "I want to know more about the company",
        "I want to know more about the product",
        "I want to know more about the team",
      ],
    },
  ]);

  // Get the response from the chatBot
  const getResponse = (option: string) => {
    let response: IChatBotMessage;

    // 1. Get the response from the chatBot
    switch (option) {
      case "I want to know more about the company":
        response = {
          user: "user",
          message: "What do you want to know about the company?",
          options: [
            "What is the company's mission?",
            "What is the company's vision?",
            "What is the company's values?",
          ],
        };
        break;
      case "I want to know more about the product":
        response = {
          user: "user",
          message: "What do you want to know about the product?",

          options: [
            "What is the product's mission?",
            "What is the product's vision?",
            "What is the product's values?",
          ],
        };
        break;
      case "I want to know more about the team":
        response = {
          user: "user",
          message: "What do you want to know about the team?",
          options: [
            "What is the team's mission?",
            "What is the team's vision?",
            "What is the team's values?",
          ],
        };
        break;
      default:
        response = {
          user: "user",
          message: "What do you want to know about the team?",
          options: [
            "What is the team's mission?",
            "What is the team's vision?",
            "What is the team's values?",
          ],
        };
    }

    // Scroll to the bottom of the chat
  };

  return (
    <div className="chatbox-message-body">
      <div className="chatbox-message-body-wrapper">
        {chatBotMessages.map((message, index) => {
          return (
            <div
              key={index}
              className={`${
                message.user === "chatBot"
                  ? "chatbox-message-body-chatBot"
                  : "chatbox-message-body-user"
              }`}
            >
              <div className="chatbox-message-body-chatBot-wrapper">
                <div className="chatbox-message-body-chatBot-message">
                  {message.message}
                  {/* PLAY AUDIO */}
                  <audio src={audio.src} />
                </div>
                <div className="chatbox-message-body-chatBot-options">
                  {message.options.map((option, index) => {
                    return (
                      <div
                        key={index}
                        className="chatbox-message-body-chatBot-option"
                        onClick={() => getResponse(option)}
                      >
                        {option}
                        {option ? (
                          <i className="bx bx-right-arrow-alt chatbox-message-body-chatBot-option-icon" />
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        {/* INPUT */}
        <div className="chatbox-message-body-input">
          <input
            type="text"
            className="chatbox-message-body-input-text"
            placeholder="Type a message..."
            disabled
          />
          <div className="chatbox-message-body-input-icon">
            <i className="bx bx-paper-plane" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatEngine;
