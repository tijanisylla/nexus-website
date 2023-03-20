import { createContext } from "react";
import { contextDarkModeType } from "../data/Models";

const iUserContextState: contextDarkModeType = {
  IsdarkMode: false,
  toggleIsDarkMode: () => {},

  user: null,
  setUser: (user: any) => {},

  chat: null,
  setChat: (chat: any) => {},

  isChatOpen: false,
  setIsChatOpen: (toggleChat: any) => {},

  toggleChat: () => {},
};

const contextDarkMode = createContext<contextDarkModeType>(iUserContextState);
export default contextDarkMode;
