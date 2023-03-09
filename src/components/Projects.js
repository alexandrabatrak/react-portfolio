// import Router from './router/Router';
import projects from './projects.json';
import Project from './Project';
import { Container, Row } from 'react-bootstrap';

export default function Projects() {
  return (
    <section className='bg-secondary d-flex align-items-center min-vh-100 p-5'>
      <Container style={{ 'max-width': '1200px' }}>
        <Row>
          <div>
            <h2 className='display-1'>Projects</h2>
          </div>
          <div className='grid'>
            {projects.map((project) => {
              return (
                <Project
                  id={project.id}
                  title={project.title}
                  deployment={project.deployment}
                  repo={project.repo}
                  img={project.img}
                />
              );
            })}
          </div>
        </Row>
      </Container>
    </section>
  );
}
