import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectPage from "../pages/ProjectPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";

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
  const hoverables =
    "a, button, .sound-wrapper, .nav-icon, .swiper-button-prev, .swiper-button-next";

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
  const HoverPrivacy = withCustomCursor(Privacy, hoverables);
  const HoverTerms = withCustomCursor(Terms, hoverables);

  return (
    <Routes key={location.pathname} location={location}>
      <Route exact path='/' element={<HoverHome />} />
      <Route exact path='/about' element={<HoverAbout />} />
      <Route exact path='/contact' element={<HoverContact />} />
      <Route exact path='/projects' element={<HoverProjects />} />
      <Route exact path='/projects/:projectId' element={<HoverProjectPage />} />
      <Route exact path='/terms-and-conditions' element={<HoverTerms />} />
      <Route exact path='/privacy-statement' element={<HoverPrivacy />} />
    </Routes>
  );
}
