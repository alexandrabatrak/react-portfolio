import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Project from '../Project';
import ProjectDetails from '../ProjectDetails';
import projects from '../projects.json';

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const handleClose = () => {
    setSelectedProjectId(null);
  };

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <motion.section
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: [0, 50, 0] }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      className='bg-primary d-flex align-items-center min-vh-100 p-5'>
      <Container style={{ maxWidth: '1200px' }}>
        <Row>
          <div>
            <h2 className='display-1'>Projects</h2>
          </div>
          <div className='grid'>
            {projects.map((project) => {
              return (
                <motion.div
                  layoutId={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  key={project.id}>
                  <Project
                    id={project.id}
                    title={project.title}
                    deployment={project.deployment}
                    repo={project.repo}
                    img={project.img}
                  />
                </motion.div>
              );
            })}
          </div>
        </Row>
      </Container>
      {selectedProject && (
        <ProjectDetails
          id={selectedProject.id}
          show={selectedProjectId !== null}
          onHide={handleClose}
          title={selectedProject.title}
          img={selectedProject.img}
          description={selectedProject.description}
          repo={selectedProject.repo}
          deployment={selectedProject.deployment}
        />
      )}
    </motion.section>
  );
}
