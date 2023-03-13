import MotionSection from '../components/MotionSection/MotionSection';
import Container from '../components/Container/Container';
import ProjectsGrid from '../components/ProjectsGrid/ProjectsGrid';
import PageTitle from '../components/PageTitle/PageTitle';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  return (
    <MotionSection className='projects'>
      <PageTitle title={'Projects'} />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: '50%' }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.5 }}>
          <p>
            Explore my portfolio of frontend development projects, where the art
            of design and technical proficiency converge in perfect harmony.
            Each project showcases my keen eye for detail and user-centric
            approach, resulting in intuitive and visually appealing websites and
            applications.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: '50%' }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.6 }}>
          <p>
            Take a closer look at the inner workings of each project by clicking
            on them, and witness the design and development process that
            culminated in their creation.
          </p>
          <p className='scroll-down absolute-center'>
            <span>&darr;</span>
          </p>
        </motion.div>
      </Container>
      <AnimatePresence mode='wait'>
        <ProjectsGrid />
      </AnimatePresence>
    </MotionSection>
  );
}
