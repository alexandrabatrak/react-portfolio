import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Footer from './components/Footer';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  return (
    <main>
      <Router>
        <Nav />
        <AnimatePresence mode='wait'>
          <Routes
          // key={useLocation().pathname} location={useLocation()}
          >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </main>
  );
}
