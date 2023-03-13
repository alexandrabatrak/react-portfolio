import { Link } from 'react-router-dom';
import './style.scss';

export default function ScrollDown() {
  return (
    <div className='scroll-down'>
      <Link to='projects' spy='true' smooth='true' duration={500} offset={-70}>
        <p>See what I made</p>
        <span>&darr;</span>
      </Link>
    </div>
  );
}
