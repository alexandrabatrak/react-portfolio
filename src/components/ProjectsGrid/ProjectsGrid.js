import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from '../../projects.json';
import './style.scss';

export default function ProjectsGrid({ props }) {
  return (
    <div className='grid'>
      {projects.map((project) => {
        return (
          <motion.div layoutId={project.id} key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                className='d-flex flex-column'>
                <motion.div className='project-image'>
                  <div
                    className='bg-image'
                    style={{ backgroundImage: `url(${project.img})` }}
                  />
                </motion.div>
                <motion.h3>{project.title}</motion.h3>
                {/* <motion.a href={project.repo}>Repo</motion.a>
            <motion.a href={project.deployment}>Deployment</motion.a> */}
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
