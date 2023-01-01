import React, { useState } from "react";

const ThemeCtx = React.createContext({
  mode: localStorage.getItem("mode"),
  effect: false,
});

export const ThemeContext = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("mode"));
  const [effect, setEffects] = useState(localStorage.getItem("effects"));
  const neonClassAdd = () => {
    return (mode === "dark") & (effect === "true");
  };
  return (
    <ThemeCtx.Provider
      value={{
        mode,
        setMode: setMode,
        effect,
        setEffects: setEffects,
        neonClassAdd: neonClassAdd,
      }}
    >
      {children}
    </ThemeCtx.Provider>
  );
};

export default ThemeCtx;
