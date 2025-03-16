import { createContext, useEffect, useState } from "react";

export const WebModeContext = createContext();

export const WebModeProvider = ({ children }) => {
  const [webMode, setWebMode] = useState(() => localStorage.getItem("webMode") || "Light");

  useEffect(() => {
    localStorage.setItem("webMode", webMode);
    document.body.style.backgroundColor = webMode === "Light" ? "#ECDFCC" : "#042743";
  }, [webMode]);

  const toggleMode = () => {
    setWebMode((prevMode) => (prevMode === "Light" ? "Dark" : "Light"));
  };

  return (
    <WebModeContext.Provider value={{ webMode, toggleMode }}>
      {children}
    </WebModeContext.Provider>
  );
};
