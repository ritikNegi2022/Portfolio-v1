import classes from "./AboutMe.module.css";
import profile from "../assets/Images/profile.jpg";
import ThemeCtx from "../context/Theme-context";
import { useContext } from "react";

const AboutMe = () => {
    const ctx = useContext(ThemeCtx)
  return (
    <>
      <div className={classes.aboutMeContainer}>
        <section className={classes.section}>
          <div className={classes.titleAndParagraph}>
            <h1>
              Hi! I'm{" "}
              <span
                className={`${classes.LavenderIndigo} ${
                  ctx.neonClassAdd() && classes.neonLavenderIndigo
                }`}
              >{`< Ritik Negi />.`}</span>
            </h1>
            <p>
              I am here to assist you in creating a website. which will appear
              astounding. And will inspire confidence in your viewer as soon as
              they access your website.
            </p>
          </div>
          <div className={classes.image}>
            <img src={profile} alt="" />
          </div>
        </section>
        <section className={classes.section}>
          <div className={classes.titleAndParagraph}>
            <h1>
              The basics of who{" "}
              <span
                className={`${classes.FernGreen} ${
                  ctx.neonClassAdd() && classes.neonFernGreen
                }`}
              >{`< I am />.`}</span>
            </h1>
            <p>
              Coding is the only thing I can do effectively. I am a self-taught
              web developer as well. All of the free resources on the internet
              are where I study. If I'm not coding, odds are that I'm either
              learning a new skill or amusing myself online with a wide range of
              things like playing video games, mindlessly browsing the internet,
              or looking through Instagram memes.
            </p>
          </div>
          <div className={classes.image}>
            <img src={profile} alt="" />
          </div>
        </section>
        <section className={classes.section}>
          <div className={classes.titleAndParagraph}>
            <h1>
              <span
                className={`${classes.ArtyClickTurquoise} ${
                  ctx.neonClassAdd() && classes.neonArtyClickTurquoise
                }`}
              >{`< Future objectives />`}</span>{" "}
              I'm pursuing
            </h1>
            <p>
              <ul className={`${classes.list}`}>
                <li>
                  {" "}
                  <span
                    className={`${classes.InternationalOrange} ${
                      ctx.neonClassAdd() && classes.neonInternationalOrange
                    }`}
                  >{`</>`}</span>{" "}
                  To upgrade my web development capabilities.
                </li>
                <li>
                  <span
                    className={`${classes.InternationalOrange} ${
                      ctx.neonClassAdd() && classes.neonInternationalOrange
                    }`}
                  >{`</>`}</span>{" "}
                  Desire to learn how to use a linux system.
                </li>
                <li>
                  <span
                    className={`${classes.InternationalOrange} ${
                      ctx.neonClassAdd() && classes.neonInternationalOrange
                    }`}
                  >{`</>`}</span>{" "}
                  Furthermore to get new skills to polish my web development
                  work, such as photoshop and others.
                </li>
                <li>
                  <span
                    className={`${classes.InternationalOrange} ${
                      ctx.neonClassAdd() && classes.neonInternationalOrange
                    }`}
                  >{`</>`}</span>{" "}
                  still updating my list
                </li>
              </ul>
            </p>
          </div>
          <div className={classes.image}>
            <img src={profile} alt="" />
          </div>
        </section>{" "}
      </div>
    </>
  );
};

export default AboutMe;
