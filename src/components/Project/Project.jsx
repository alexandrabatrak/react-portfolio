import projects from "../../projects.json";
import Slider from "../Slider/Slider";
import Separator from "../Separator/Separator";
import Subheading from "../Subheading/Subheading";
import Container from "../Container/Container";
import { motion, AnimatePresence } from "framer-motion";
import "./project.scss";

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
          transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}>
          <Container>
            <div className='section'>
              <div className='project-title-wrapper'>
                <h3>{project.title}</h3>
              </div>
              <Separator />
              <div className='project-details grid'>
                {project.role && (
                  <div className='project-role'>
                    <Subheading text='Role' />
                    <p>{project.role}</p>
                  </div>
                )}
                {project.tools.length > 0 && (
                  <div className='project-techspec'>
                    {/* TODO: Add icons for tools */}
                    <Subheading text='Technologies' />
                    <ul>
                      {project.tools.map((tool, i) => {
                        return <li key={i}>{tool}</li>;
                      })}
                    </ul>
                  </div>
                )}
                {project.links && (
                  <div className='project-links'>
                    <Subheading text='View project' />
                    {project.links.deployment && (
                      <a
                        href={project.deployment}
                        target='_blank'
                        rel='noreferrer'>
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
            </div>
            {project.description && (
              <>
                <Separator />
                <div className='project-about'>
                  <p>{project.description}</p>
                </div>
              </>
            )}
            {project.process && (
              <div className='project-process section'>
                <p>{project.process}</p>
              </div>
            )}
            {project.features.length > 0 && (
              <>
                <Separator />
                <div className='project-features section'>
                  <Subheading text='Features' />
                  <ul>
                    {project.features.map((feature, i) => {
                      return <li key={i}>{feature}</li>;
                    })}
                  </ul>
                </div>
              </>
            )}
          </Container>
          <Slider project={project} imgNum={imgNum} />
          <Separator />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
