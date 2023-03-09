import projects from './projects.json';
import { Card } from 'react-bootstrap';

export default function Project({ id, title, deployment, repo, img }) {
  return (
    <div className='d-flex flex-column'>
      {/* https://stackoverflow.com/questions/39195687/setting-a-backgroundimage-with-react-inline-styles */}
      <div className='project-image'>
        <div className='bg-image' style={{ backgroundImage: `url(${img})` }} />
      </div>
      <h3>{title}</h3>
      <a href='{repo}'>Repo</a>
      <a href='{deployment}'>Deployment</a>
    </div>
  );
}
