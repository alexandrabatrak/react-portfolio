import Nav from './components/Nav';
import Footer from './components/Footer';
import RoutesWrapper from './components/Routes';
import './App.scss';
import { AnimatePresence } from 'framer-motion';
import SoundIcon from './components/SoundIcon';

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
