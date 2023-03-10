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
      <main className='bg-black overflow-hidden position-relative z-1'>
        <SoundIcon />
        <AnimatePresence mode='wait'>
          <RoutesWrapper />
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
