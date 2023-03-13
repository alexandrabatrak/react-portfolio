import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from '../../projects.json';
import './style.scss';

export default function ProjectsGrid({ props }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 1, delay: 1 }}
      className='grid'>
      {projects.map((project) => {
        return (
          <motion.div
            layoutId={project.id}
            key={project.id}
            className='grid-item'>
            <Link to={`/projects/${project.id}`}>
              <motion.div
                initial={{ opacity: 0, y: '50%' }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
                className='project-wrapper'>
                <motion.div className='project-image'>
                  <img src={project.img} alt={project.img.alt} />
                </motion.div>
                <motion.h3>{project.title}</motion.h3>
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
