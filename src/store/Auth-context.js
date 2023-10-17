import { createContext } from "react";

export const AuthContext = createContext({
  userName: "Alen",
  isLoggedIn: false,
  handleIsLoggedIn: () => {},
});
