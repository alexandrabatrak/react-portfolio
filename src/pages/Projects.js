import ProjectsGrid from '../components/ProjectsGrid/ProjectsGrid';
import PageTitle from '../components/PageTitle/PageTitle';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: [0, 50, 0] }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}>
      <PageTitle title={'Projects'} />
      <div className='container max-width'>
        <div className='row'>
          <ProjectsGrid />
        </div>
      </div>
    </motion.section>
  );
}
