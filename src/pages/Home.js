import { Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import NoiseBg from '../components/NoiseBg';
import Title from '../components/Title';
import ScrollDown from '../components/ScrollDown';

export default function Home() {
  return (
    <>
      <div className='bg-black position-fixed z-0'>
        <NoiseBg width={window.innerWidth} height={window.innerHeight} />
      </div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: '200%' }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        className='d-flex align-items-center min-vh-100 p-5 position-relative'>
        <Container fluid>
          <Row>
            <Title />
          </Row>
          <ScrollDown />
        </Container>
      </motion.section>
    </>
  );
}
