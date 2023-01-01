import { useContext, useEffect, useState } from "react";
import classes from "./Footer.module.css";
import ThemeCtx from "../context/Theme-context";

const Footer = () => {
  const ctx = useContext(ThemeCtx);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.querySelector(`#${theme}`).checked = true;
    }
    return;
  }, []);
  const setThemeOnLocalStorage = (event) => {
    localStorage.setItem("theme", event.target.id);
    localStorage.setItem("mode", event.target.value);
  };
  const setEffectState = (event) => {
    if (event.target.checked) {
      localStorage.setItem("effects", true);
      return ctx.setEffects('true');
    }
    localStorage.setItem("effects", false);
    return ctx.setEffects('false');
  };
  return (
    <>
      <form className={`${classes.footer}`}>
        <input
          onClick={(event) => {
            setThemeOnLocalStorage(event);
            ctx.setMode("light");
          }}
          defaultChecked
          type="radio"
          name="theme"
          value="light"
          id={`${classes.lightTheme}`}
        />
        <input
          onClick={(event) => {
            setThemeOnLocalStorage(event);
            ctx.setMode("dark");
          }}
          type="radio"
          name="theme"
          value="dark"
          id={`${classes.darkTheme}`}
        />

        <input
          defaultChecked={(ctx.effect === "true")}
          disabled={ctx.mode === "light" | !ctx.mode}
          onChange={setEffectState}
          type="checkbox"
          name="neon"
          id={`${classes.neonTheme}`}
        />
      </form>
    </>
  );
};

export default Footer;
