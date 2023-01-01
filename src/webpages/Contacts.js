import instagramLogo from "../assets/SVGs/instagram.png";
import mailLogo from "../assets/SVGs/email.png";
import classes from "./Contacts.module.css";
import ThemeCtx from "../context/Theme-context";
import { useContext } from "react";

const Contacts = () => {
  const ctx = useContext(ThemeCtx);
  return (
    <>
      <div className={`${classes.contactsContainer}`}>
        <div className={classes.contacts}>
          <h1 className={classes.title}>
            The list is presented from most to least preferred.
          </h1>
          <section className={classes.instagram}>
            <h1
              className={`${classes.hotPink} ${
                ctx.neonClassAdd() && classes.neonHotPink
              }`}
            >
              {`< Instagram DM />`}
            </h1>
            <a href="https://www.instagram.com/ritik_negi2002/" target="_blank">
              <img className={`${classes.linkImage}`} src={instagramLogo} />
            </a>
            <h1>
              <span
                className={`${classes.hotPink} ${
                  ctx.neonClassAdd() && classes.neonHotPink
                }`}
              >
                {`< Instagram ID /> :`}
              </span>{" "}
              <a
                className={`${classes.selectabel} ${classes.cyan} ${
                  ctx.neonClassAdd() && classes.neonCyan
                }`}
                href="https://www.instagram.com/ritik_negi2002/"
                target="_blank"
              >
                ritik_negi2002
              </a>
            </h1>
          </section>
          <section className={classes.email}>
            <h1
              className={`${classes.orange} ${
                ctx.neonClassAdd() && classes.neonOrange
              }`}
            >
              {`< Email />`}
            </h1>
            <a target="_blank" href="mailto:negiritik2022@gmail.com">
              <img className={`${classes.linkImage}`} src={mailLogo} />
            </a>
            <h1>
              <span
                className={`${classes.orange} ${
                  ctx.neonClassAdd() && classes.neonOrange
                }`}
              >
                {`< Email address /> :`}
              </span>{" "}
              <a
                target="_blank"
                className={`${classes.selectabel} ${classes.cyan} ${
                  ctx.neonClassAdd() && classes.neonCyan
                }`}
                href="mailto:negiritik2022@gmail.com"
              >
                negiritik2022@gmail.com
              </a>{" "}
            </h1>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contacts;
