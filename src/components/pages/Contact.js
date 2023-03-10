import { Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('xnqyzqjz');
  return (
    <motion.section
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: [0, 50, 0] }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      className='bg-black bg-opacity-50 d-flex align-items-center min-vh-100 p-5'>
      <Container>
        <Row>
          <motion.div
            initial={{ opacity: 0, x: -1 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 1 } }}
            exit={{ opacity: 0, x: '50%' }}
            transition={{ ease: 'easeInOut', duration: 1 }}>
            <h1>Contact</h1>
            <p>ckjdncjnfdkjvdf</p>
            <div>{state.succeeded ? 'Thank you for signing up!' : ''}</div>
            <form onSubmit={handleSubmit}>
              <label htmlFor='name'>Name</label>
              <input id='name' type='text' name='name' />
              <label htmlFor='email'>Email</label>
              <input id='email' type='email' name='email' />
              <label htmlFor='message'>Message</label>
              <input id='message' type='text' name='messgae' />
              <button type='submit' disabled={state.submitting}>
                Send
              </button>
            </form>
          </motion.div>
        </Row>
      </Container>
    </motion.section>
  );
}
