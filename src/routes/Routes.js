import { Route, Routes, useLocation } from 'react-router-dom';
import CustomCursor from '../extra-components/CustomCursor/CustomCursor';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
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

  const HoverableHome = withCustomCursor(Home, 'a, button');
  const HoverableAbout = withCustomCursor(About, 'a, button');
  const HoverableContact = withCustomCursor(Contact, 'a, button');
  const HoverableProjects = withCustomCursor(Projects, 'a, button');

  return (
    <Routes key={location.pathname} location={location}>
      <Route exact path='/' element={<HoverableHome />} />
      <Route path='/about' element={<HoverableAbout />} />
      <Route path='/contact' element={<HoverableContact />} />
      <Route path='/projects' element={<HoverableProjects />} />
    </Routes>
  );
}
