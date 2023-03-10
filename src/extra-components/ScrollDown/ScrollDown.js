import { Link } from 'react-router-dom';
import { MdOutlineSouth } from 'react-icons/md';
import './style.scss';

export default function ScrollDown() {
  return (
    <div className='scroll-down position-absolute bottom-0 d-flex justify-content-center text-white fs-1 mb-3'>
      <Link to='projects' spy='true' smooth='true' duration={500} offset={-70}>
        <MdOutlineSouth />
      </Link>
    </div>
  );
}
