import classes from "./Home.module.css";
import ThemeCtx from "../context/Theme-context";
import { useContext } from "react";

const Home = () => {
  const ctx = useContext(ThemeCtx);
  return (
    <>
      <div className={`${classes.homeContainer}`}>
        <h1
          className={`${classes.title}`}
        >{`< Hello, Welcome to my Portfolio page. />`}</h1>
        <div className={`${classes.home}`}>
          <h2 className={`${classes.detail}`}>
            Hi, My name is{" "}
            <span
              className={`${classes.tag} ${classes.cyan} ${
                ctx.neonClassAdd() && classes.neonCyan
              }`}
            >{`< Ritik Negi. />`}</span>
          </h2>
          <h2 className={`${classes.detail}`}>
            And, My age is{" "}
            <span
              className={`${classes.tag} ${classes.yellow} ${
                ctx.neonClassAdd() && classes.neonYellow
              }`}
            >{`< 20 years. />`}</span>
          </h2>
          <h2 className={`${classes.detail}`}>
            I am a self-taught{" "}
            <span
              className={`${classes.tag} ${classes.pink} ${
                ctx.neonClassAdd() && classes.neonPink
              }`}
            >{`< Web developer. />`}</span>
          </h2>
          <h3 className={`${classes.note}`}>
            * For details visit the{" "}
            <span
              className={`${classes.infoTag} ${
                ctx.neonClassAdd() && classes.neonRed
              }`}
            >{`"< About me />"`}</span>{" "}
            page in{" "}
            <span
              className={`${classes.infoTag} ${
                ctx.neonClassAdd() && classes.neonRed
              }`}
            >{`"<Links />"`}</span>
          </h3>
        </div>
        <div className={`${classes.svgContainer}`}></div>
      </div>
    </>
  );
};

export default Home;
