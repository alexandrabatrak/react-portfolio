import { Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Footer from './components/Footer';
import './App.scss';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import NoiseBg from './components/NoiseBg';

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

export default function App() {
  const location = useLocation();

  return (
    <>
      <div className='position-fixed z-0'>
        <NoiseBg width={window.innerWidth} height={window.innerHeight} />
      </div>
      <main className='overflow-hidden position-relative z-1'>
        <Nav />
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname} location={location}>
            <Route exact path='/' element={<HoverableHome />} />
            <Route path='/about' element={<HoverableAbout />} />
            <Route path='/contact' element={<HoverableContact />} />
            <Route path='/projects' element={<HoverableProjects />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
