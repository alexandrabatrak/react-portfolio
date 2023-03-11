// import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Project from '../components/Project/Project';
import projects from '../projects.json';

export default function Projects() {
  // const [selectedProjectId, setSelectedProjectId] = useState(null);

  // const handleProjectClick = (projectId) => {
  //   setSelectedProjectId(projectId);
  // };

  // const handleClose = () => {
  //   setSelectedProjectId(null);
  // };

  // const selectedProject = projects.find(
  //   (project) => project.id === selectedProjectId
  // );

  return (
    <motion.section
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: [0, 50, 0] }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      className='bg-black bg-opacity-50 d-flex align-items-center min-vh-100 p-5'>
      <Container style={{ maxWidth: '1200px' }}>
        <Row>
          <div>
            <h2 className='display-1'>Projects</h2>
          </div>
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
        </Row>
      </Container>
      {/* {selectedProject && (
        <Project
          id={selectedProject.id}
          show={selectedProjectId !== null}
          onHide={handleClose}
          // title={selectedProject.title}
          // img={selectedProject.img}
          // description={selectedProject.description}
          // repo={selectedProject.repo}
          // deployment={selectedProject.deployment}
        />
      )} */}
    </motion.section>
  );
}
