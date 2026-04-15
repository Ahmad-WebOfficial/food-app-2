import { createContext } from "react";
import { HeaderBtns } from "../Common";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={HeaderBtns}>{children}</AppContext.Provider>
  );
};
