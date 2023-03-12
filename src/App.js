import { AnimatePresence } from 'framer-motion';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import RoutesWrapper from './routes/Routes';
import SoundIcon from './extra-components/SoundIcon/SoundIcon';
import './App.scss';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <SoundIcon />
        <AnimatePresence mode='wait'>
          <RoutesWrapper />
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
