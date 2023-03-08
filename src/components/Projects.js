import Router from './router/Router';
import { Container, Row } from 'react-bootstrap';

export default function Projects() {
  return (
    <Container fluid>
      <Row>
        <div className='bg-secondary d-flex align-items-center min-vh-100 px-5'>
          <div>
            <h1 className='display-1'>Projects</h1>
          </div>
        </div>
      </Row>
    </Container>
  );
}
