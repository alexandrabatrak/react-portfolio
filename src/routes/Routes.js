import { Route, Routes, useLocation } from 'react-router-dom';
import CustomCursor from '../extra-components/CustomCursor/CustomCursor';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import ProjectPage from '../pages/ProjectPage';
import About from '../pages/About';
import Contact from '../pages/Contact';

export default function RoutesWrapper() {
  const location = useLocation();
  const withCustomCursor = (Component, hoverable) => {
    return (props) => (
      <>
        <CustomCursor hoverable={hoverable} />
        <Component {...props} />
      </>
    );
  };

  const HoverableHome = withCustomCursor(Home, 'a, button, .sound-wrapper');
  const HoverableAbout = withCustomCursor(About, 'a, button, .sound-wrapper');
  const HoverableContact = withCustomCursor(
    Contact,
    'a, button, .sound-wrapper'
  );
  const HoverableProjects = withCustomCursor(
    Projects,
    'a, button, .sound-wrapper'
  );
  const HoverableProjectPage = withCustomCursor(
    ProjectPage,
    'a, button, .sound-wrapper'
  );

  return (
    <Routes key={location.pathname} location={location}>
      <Route exact path='/' element={<HoverableHome />} />
      <Route path='/about' element={<HoverableAbout />} />
      <Route path='/contact' element={<HoverableContact />} />
      <Route path='/projects' element={<HoverableProjects />} />
      <Route path='/projects/:projectId' element={<HoverableProjectPage />} />
    </Routes>
  );
}
