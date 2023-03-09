import { Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      className='bg-primary d-flex align-items-center min-vh-100 p-5'>
      <Container fluid>
        <Row>
          <div>
            <h1>About</h1>
            <p>ckjdncjnfdkjvdf</p>
          </div>
        </Row>
      </Container>
    </motion.section>
  );
}
