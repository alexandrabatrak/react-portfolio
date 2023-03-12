import { motion } from 'framer-motion';
import Container from '../components/Container/Container';
import PageTitle from '../components/PageTitle/PageTitle';
import ContactForm from '../components/ContactForm/ContactForm';

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: [0, 50, 0] }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}>
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
    </motion.section>
  );
}
