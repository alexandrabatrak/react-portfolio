import projects from '../../projects.json';
import Slider from '../Slider/Slider';
import Separator from '../Separator/Separator';

import { motion, AnimatePresence } from 'framer-motion';
import './style.scss';

export default function Project({ id }) {
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];
  const imgNum = project.img.length;
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.2 }}>
          <div className='section'>
            <div className='project-title-wrapper'>
              <h3>{project.title}</h3>
            </div>
            <Separator />
            <div className='project-about'>
              <p>{project.description.short}</p>
            </div>
            {project.links && (
              <div className='project-links'>
                {project.links.deployment && (
                  <a href={project.deployment} target='_blank' rel='noreferrer'>
                    Live site
                  </a>
                )}
                {project.links.repo && (
                  <a href={project.repo} target='_blank' rel='noreferrer'>
                    Github
                  </a>
                )}
              </div>
            )}
          </div>
          <div className='project-image'>
            <img
              src={project.imgfolder + project.img[0].url}
              alt={project.img[0].alt}
            />
          </div>
          {project.description && (
            <div className='project-description section'>
              <p>{project.description?.long}</p>
            </div>
          )}

          {imgNum > 1 && (
            <div className='project-image'>
              <img
                src={project.imgfolder + project.img[1].url}
                alt={project.img[1].alt}
              />
            </div>
          )}
          <div className='project-process section'>
            <p>{project.process}</p>
          </div>

          <Slider project={project} imgNum={imgNum} />

          {project.features && (
            <div className='project-features section'>
              <div className='project-subheading'>
                <h4>Features</h4>
              </div>
              <ul>
                {project.features.map((feature, i) => {
                  return <li key={i}>{feature}</li>;
                })}
              </ul>
            </div>
          )}
          <div className='project-techspec'>
            {/* TODO: Add icons for tools */}
            <div className='project-subheading'>
              <h4>Technologies</h4>
            </div>
            <ul>
              {project.tools.map((tool, i) => {
                return <li key={i}>{tool}</li>;
              })}
            </ul>
          </div>
          <Separator />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
