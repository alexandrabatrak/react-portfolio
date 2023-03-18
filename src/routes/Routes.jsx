import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectPage from "../pages/ProjectPage";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function RoutesWrapper({ setIsLoaded }) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [setIsLoaded]);

  useEffect(() => {
    const touchDevice = () => setMobile(true);
    window.addEventListener("touchstart", touchDevice);
    return () => window.removeEventListener("touchstart", touchDevice);
  }, []);

  const location = useLocation();
  const hoverables = "a, button, .sound-wrapper, .nav-icon";
  const withCustomCursor = (Component, hoverable) => {
    return (props) => (
      <>
        {!mobile && <CustomCursor hoverable={hoverable} />}
        <Component {...props} />
      </>
    );
  };

  const HoverHome = withCustomCursor(Home, hoverables);
  const HoverAbout = withCustomCursor(About, hoverables);
  const HoverContact = withCustomCursor(Contact, hoverables);
  const HoverProjects = withCustomCursor(Projects, hoverables);
  const HoverProjectPage = withCustomCursor(ProjectPage, hoverables);

  return (
    <Routes key={location.pathname} location={location}>
      <Route exact path='/' element={<HoverHome />} />
      <Route path='/about' element={<HoverAbout />} />
      <Route path='/contact' element={<HoverContact />} />
      <Route path='/projects' element={<HoverProjects />} />
      <Route path='/projects/:projectId' element={<HoverProjectPage />} />
    </Routes>
  );
}
