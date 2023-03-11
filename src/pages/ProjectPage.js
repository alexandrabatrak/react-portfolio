import { useParams } from 'react-router-dom';
import Project from '../components/Project/Project';
import projects from '../projects.json';

export default function ProjectPage() {
  const { projectId } = useParams();

  const project = projects.find((project) => project.id === projectId);

  return <div>{project && <Project id={project.id} />}</div>;
}
