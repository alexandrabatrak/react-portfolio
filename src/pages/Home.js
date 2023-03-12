import { motion } from 'framer-motion';
import NoiseBg from '../extra-components/NoiseBg/NoiseBg';
import Container from '../components/Container/Container';
import MainTitle from '../components/MainTitle/MainTitle';
import ScrollDown from '../extra-components/ScrollDown/ScrollDown';

export default function Home() {
  return (
    <>
      <NoiseBg width={window.innerWidth} height={window.innerHeight} />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: '200%' }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        className='home absolute-center'>
        <Container>
          <MainTitle />
        </Container>
        <ScrollDown />
      </motion.section>
    </>
  );
}
