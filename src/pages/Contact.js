import { motion } from 'framer-motion';
import MotionSection from '../components/Motion/MotionSection';
import Container from '../components/Container/Container';
import PageTitle from '../components/PageTitle/PageTitle';
import ContactForm from '../components/ContactForm/ContactForm';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <MotionSection className='contact'>
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -1 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 1 } }}
          exit={{ opacity: 0, x: '50%' }}
          transition={{ ease: 'easeInOut', duration: 1 }}>
          <PageTitle title={'Contact'} />
          <p>ckjdncjnfdkjvdf</p>
          <ContactForm />
        </motion.div>
      </Container>
    </MotionSection>
  );
}
