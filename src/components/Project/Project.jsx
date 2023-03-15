import projects from "../../projects.json";
import Slider from "../Slider/Slider";
import Separator from "../Separator/Separator";
import Subheading from "../Subheading/Subheading";
import Container from "../Container/Container";
import MotionParagraph from "../Motion/MotionParagraph";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
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
              <MotionParagraph>
                <div className='project-title-wrapper'>
                  <h3>{project.title}</h3>
                </div>
              </MotionParagraph>
            </div>
            <MotionParagraph delay={0.6}>
              <Separator />
            </MotionParagraph>
            <MotionParagraph delay={0.7}>
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
                        const id = uuidv4();
                        return <li key={id}>{tool}</li>;
                      })}
                    </ul>
                  </div>
                )}

                {project.links && (
                  <div className='project-links'>
                    <Subheading text='View project' />
                    {project.links.deployment && (
                      <a
                        href={project.links.deployment}
                        target='_blank'
                        rel='noreferrer'>
                        Live site
                      </a>
                    )}
                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        target='_blank'
                        rel='noreferrer'>
                        Github
                      </a>
                    )}
                  </div>
                )}
              </div>
            </MotionParagraph>
            {project.description && (
              <>
                <MotionParagraph>
                  <Separator />
                </MotionParagraph>
                <MotionParagraph delay={0.6}>
                  <div className='project-about'>
                    <p>{project.description}</p>
                  </div>
                </MotionParagraph>
              </>
            )}
            {project.process && (
              <MotionParagraph>
                <div className='project-process section'>
                  <p>{project.process}</p>
                </div>
              </MotionParagraph>
            )}
            {project.features.length > 0 && (
              <>
                <MotionParagraph delay={0.6}>
                  <Separator />
                </MotionParagraph>
                <MotionParagraph delay={0.7}>
                  <div className='project-features section'>
                    <Subheading text='Features' />
                    <ul>
                      {/* Not recommended to use index as a key, but in this situation, I don't know how else to approach it, unless creating an array of objects in the projects.json */}
                      {project.features.map((feature, i) => {
                        const id = uuidv4();
                        return <li key={id}>{feature}</li>;
                      })}
                    </ul>
                  </div>
                </MotionParagraph>
              </>
            )}
          </Container>
          <MotionParagraph>
            <Slider project={project} imgNum={imgNum} />
          </MotionParagraph>
          <MotionParagraph delay={0.6}>
            <Separator />
          </MotionParagraph>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
