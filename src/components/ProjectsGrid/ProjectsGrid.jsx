// import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams, useLocation } from "react-router-dom";
import projects from "../../projects.json";
import "./projectgrid.scss";

export default function ProjectsGrid() {
  // const { currentProjectId } = useLocation().state || {};
  // const { projectId } = useParams();
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   if (currentProjectId && currentProjectId === projectId) {
  //     const projectIndex = projects.findIndex(
  //       (project) => project.id === projectId
  //     );
  //     const gridElement = document.getElementById("projects-grid");
  //     const projectElement = gridElement.children[projectIndex];
  //     const { top } = projectElement.getBoundingClientRect();
  //     setScrollPosition(gridElement.scrollTop + top);
  //   }
  // }, [currentProjectId, projectId]);

  // useEffect(() => {
  //   if (scrollPosition !== 0) {
  //     window.scrollTo({ top: scrollPosition, left: 0, behavior: "smooth" });
  //     setScrollPosition(0);
  //   }
  // }, [scrollPosition]);

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0, y: "50%", scaleY: 1 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, scaleY: 0 }}
        className='grid'
        id='projects-grid'
        key={"projects-grid"}>
        {projects.map((project) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              viewport={{ once: false }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
              className='grid-item'
              key={project.id}>
              <Link to={`/projects/${project.id}`}>
                <div className='project-wrapper'>
                  <div className='project-image'>
                    <img
                      src={project.imgfolder + project.img[0].url}
                      alt={project.img[0].alt}
                    />
                  </div>
                  <h3>{project.title}</h3>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
