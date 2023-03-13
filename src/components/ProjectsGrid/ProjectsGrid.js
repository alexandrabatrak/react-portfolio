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
      transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.2 }}
      className='grid'>
      {projects.map((project) => {
        return (
          <div className='grid-item'>
            <Link to={`/projects/${project.id}`}>
              {/* <motion.div
                initial={{ opacity: 0, y: '50%' }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scaleX: 0 }}
                viewport={{ once: false }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
                className='project-wrapper'> */}
              <motion.div
                layoutId={project.id}
                initial={{ opacity: 0, y: '50%' }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scaleX: 0 }}
                viewport={{ once: false }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
                className='project-wrapper'>
                <div className='project-image'>
                  <img
                    src={project.imgfolder + project.img[0].url}
                    alt={project.img[0].alt}
                  />
                </div>
                <h3>{project.title}</h3>
              </motion.div>
            </Link>
          </div>
        );
      })}
    </motion.div>
  );
}
