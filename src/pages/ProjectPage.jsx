import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectNav from "../components/Project/ProjectNav";
import Project from "../components/Project/Project";
import projects from "../projects.json";

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [matchedProject, setMatchedProject] = useState(null);

  useEffect(() => {
    if (matchedProject) {
      const matchedElement = document.getElementById(matchedProject.id);
      if (matchedElement) {
        matchedElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [matchedProject]);

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
          <Link
            to={{
              pathname: "/projects",
              state: { currentProjectId: projectId },
            }}
            className='back-link'
            onClick={() => setMatchedProject(project)}>
            <i aria-hidden='true'>&larr;</i>
            <span hidden>Back to Projects</span>
          </Link>
        </motion.div>
        <div>{project && <Project id={project.id} />}</div>
      </motion.section>
      {project && <ProjectNav />}
    </>
  );
}
