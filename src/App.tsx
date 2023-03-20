import { FC, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./Components/Styles/App.css";
import {
  Header,
  Home,
  Services,
  About,
  contextDarkMode,
  Chat,
  Scrollup,
  Footer,
} from "./Components";

const App: FC = () => {
  const [IsdarkMode, setIsDarkMode] = useState<boolean>(false);
  const [user, setUser] = useState<null | undefined>(null);
  const [chat, setChat] = useState<null | undefined>(null);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  // ===== User =====
  // useEffect(() => {
  //   const user: any = localStorage.getItem("user");
  //   if (user) {
  //     setUser(JSON.parse(user));
  //   }
  // }, []);

  // // ===== Chat =====
  // useEffect(() => {
  //   const chat: any = localStorage.getItem("chat");
  //   if (chat) {
  //     setChat(JSON.parse(chat));
  //   }
  // }, []);
  // console.log("User", user);
  // console.log("Chat", chat);
  // =====Toggle Chat =====
  const toggleChat = (): void => {
    localStorage.setItem("toggleChat", JSON.stringify(!isChatOpen));
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    const isOpen: boolean = localStorage.getItem("toggleChat") === "true";
    setIsChatOpen(isOpen);
  }, [isChatOpen, setIsChatOpen]);

  // ===== Dark Mode =====
  const toggleIsDarkMode = (): void => {
    localStorage.setItem("isDarkMode", JSON.stringify(!IsdarkMode));
    setIsDarkMode(!IsdarkMode);
  };

  useEffect(() => {
    const isDark: boolean = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(isDark);
  }, [IsdarkMode, setIsDarkMode]);
  return (
    <contextDarkMode.Provider
      value={{
        IsdarkMode,
        toggleIsDarkMode,
        user,
        setUser,
        chat,
        setChat,
        isChatOpen,
        toggleChat,
        setIsChatOpen,
      }}
    >
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={"404"} />
          </Routes>
          <Services />
          <About />
          <Chat />
        </main>
        <Scrollup />
        <Footer />
      </div>
    </contextDarkMode.Provider>
  );
};

export default App;
