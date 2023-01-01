import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import ThemeCtx from "../context/Theme-context";

const NavBar = () => {
  const ctx = useContext(ThemeCtx);
  const [navVisibleState, setVisibleState] = useState(false);
  const navHandler = () => {
    if (navVisibleState) {
      return setVisibleState(false);
    }
    return setVisibleState(true);
  };
  return (
    <>
      <div className={`${classes.navContainer}`}>
        <nav className={`${classes.navBarContainer}`}>
          <div className={`${classes.firstRow}`}>
            <h1>{`<Portfolio/>`}</h1>

            <button
              onClick={navHandler}
              className={`${classes.linkButton} ${
                ctx.neonClassAdd() && classes.neonRed_hover
              }`}
            >
              {!navVisibleState ? `<Link/>` : `<Close Links/>`}
            </button>
          </div>
          <div className={`${classes.secondRow}`}>
            <h2>
              {!navVisibleState
                ? '"Click here for other links."'
                : '"Click here to close the links."'}
            </h2>
            <div className={`${classes.arrowContainer}`}>
              <h2
                className={`${classes.arrow} ${
                  ctx.neonClassAdd() && classes.neonRed
                }`}
              >
                &#8630;
              </h2>
            </div>
          </div>
          <div
            className={`${classes.thirdRow} ${
              navVisibleState && classes.visible
            }`}
          >
            <Link
              className={`${ctx.neonClassAdd() && classes.neonCyan_hover}`}
              to={"/"}
            >{`<Home/>`}</Link>
            <Link
              className={`${ctx.neonClassAdd() && classes.neonCyan_hover}`}
              to={"/about_me"}
            >{`<About me/>`}</Link>
            <Link
              className={`${ctx.neonClassAdd() && classes.neonCyan_hover}`}
              to={"/projects"}
            >{`<Projects/>`}</Link>
            <Link
              className={`${ctx.neonClassAdd() && classes.neonCyan_hover}`}
              to={"/contacts"}
            >{`<Contacts/>`}</Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
