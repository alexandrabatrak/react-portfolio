import { useParams } from 'react-router-dom';
import MotionSection from '../components/MotionSection/MotionSection';
import Project from '../components/Project/Project';
import projects from '../projects.json';

export default function ProjectPage() {
  const { projectId } = useParams();

  const project = projects.find((project) => project.id === projectId);

  return (
    <MotionSection className='projects-page'>
      <div>{project && <Project id={project.id} />}</div>
    </MotionSection>
  );
}
