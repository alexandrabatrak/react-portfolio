import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Project from "../components/Project/Project";
import projects from "../projects.json";

export default function ProjectPage() {
  const { projectId } = useParams();

  const project = projects.find((project) => project.id === projectId);
  const currIndex = projects.findIndex((project) => project.id === projectId);
  const prevIndex = (currIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currIndex + 1) % projects.length;
  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        exit={{ opacity: 0, scaleY: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className='projects-page'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.7 }}
          className='back-link-wrapper'>
          <Link to='/projects' className='back-link'>
            <i aria-hidden='true'>&larr;</i>
            <span hidden>Back to Projects</span>
          </Link>
        </motion.div>
        <div>{project && <Project id={project.id} />}</div>
      </motion.section>
      <div className='project-navigation'>
        {prevProject && (
          <Link
            to={`/projects/${prevProject.id}`}
            className='project-navigation-link link-prev'>
            <div
              className='project-navigation-image bg-image'
              style={{
                backgroundImage: `url(${
                  prevProject.imgfolder + prevProject.img[0].url
                })`,
              }}>
              <h4>
                <i aria-hidden='true'>&larr;</i>
                <span>{prevProject.title}</span>
              </h4>
            </div>
          </Link>
        )}
        {nextProject && (
          <Link
            to={`/projects/${nextProject.id}`}
            className='project-navigation-link link-next'>
            <div
              className='project-navigation-image bg-image'
              style={{
                backgroundImage: `url(${
                  nextProject.imgfolder + nextProject.img[0].url
                })`,
              }}>
              <h4>
                <i aria-hidden='true'>&rarr;</i>
                <span>{nextProject.title}</span>
              </h4>
            </div>
          </Link>
        )}
      </div>
    </>
  );
}
