import { Route, Routes } from "react-router-dom";

import { ThemeContext } from "./context/Theme-context";

import classes from "./App.module.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


import Home from "./webpages/Home";
import AboutMe from "./webpages/AboutMe";
import Contacts from "./webpages/Contacts";
import Projects from "./webpages/Projects";

function App() {
  return (
    <ThemeContext>
      <div className={`${classes.mainContainer}`}>
        <NavBar />
          <Routes>
            <Route  path="/" element={<Home />}></Route>
            <Route path="/about_me" element={<AboutMe />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        <Footer />
      </div>
    </ThemeContext>
  );
}

export default App;
