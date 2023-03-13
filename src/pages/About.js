import Container from '../components/Container/Container';
import PageTitle from '../components/PageTitle/PageTitle';
import MotionSection from '../components/MotionSection/MotionSection';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <MotionSection className='about'>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
          exit={{ opacity: 0, x: '200%' }}
          transition={{ ease: 'easeInOut', duration: 1 }}>
          <PageTitle title={'About'} />
          <p>ckjdncjnfdkjvdf</p>
        </motion.div>
      </Container>
    </MotionSection>
  );
}
