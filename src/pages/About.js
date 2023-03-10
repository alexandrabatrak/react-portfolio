import { Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: [0, 50, 0] }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      className='bg-black bg-opacity-50 d-flex align-items-center min-vh-100 p-5'>
      <Container fluid>
        <Row>
          <motion.div
            initial={{ opacity: 0, x: -1 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 1 } }}
            exit={{ opacity: 0, x: '200%' }}
            transition={{ ease: 'easeInOut', duration: 1 }}>
            <h1>About</h1>
            <p>ckjdncjnfdkjvdf</p>
          </motion.div>
        </Row>
      </Container>
    </motion.section>
  );
}
