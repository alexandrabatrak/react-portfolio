import Container from '../components/Container/Container';
import PageTitle from '../components/PageTitle/PageTitle';
import { motion } from 'framer-motion';

export default function About() {
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
          exit={{ opacity: 0, x: '200%' }}
          transition={{ ease: 'easeInOut', duration: 1 }}>
          <PageTitle title={'About'} />
          <p>ckjdncjnfdkjvdf</p>
        </motion.div>
      </Container>
    </motion.section>
  );
}
