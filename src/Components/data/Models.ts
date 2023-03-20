export interface TypeNavbar {
  id: number;
  item: string;
  href: string;
  icon: string;
}

export interface TypeServices {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TypeTeam {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
}

export interface contextDarkModeType {
  IsdarkMode: boolean;
  toggleIsDarkMode: () => void;
  user: any;
  setUser: (user: any) => void;
  chat: any;
  setChat: (chat: any) => void;
  isChatOpen: boolean;
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleChat: () => void;
}
