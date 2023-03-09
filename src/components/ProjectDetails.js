import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import projects from './projects.json';

export default function ProjectDetails({ id, show, onHide }) {
  const [currentIndex, setCurrentIndex] = useState(
    projects.findIndex((p) => p.id === id)
  );
  const [project, setProject] = useState(projects[currentIndex]);

  useEffect(() => {
    setProject(projects[currentIndex]);
  }, [currentIndex]);

  const goToNextProject = () => {
    if (currentIndex === projects.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPreviousProject = () => {
    if (currentIndex === 0) {
      setCurrentIndex(projects.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <motion.div
          className='project-image'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <div
            className='bg-image'
            style={{ backgroundImage: `url(${project.img})` }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}>
          <p>{project.description}</p>
          <p>
            <a href={project.repo} target='_blank' rel='noreferrer'>
              Repo
            </a>{' '}
            |{' '}
            <a href={project.deployment} target='_blank' rel='noreferrer'>
              Deployment
            </a>
          </p>
        </motion.div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={goToPreviousProject}>
          Previous
        </Button>
        <Button variant='secondary' onClick={goToNextProject}>
          Next
        </Button>
        <Button variant='primary' onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
