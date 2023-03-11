import { Link } from 'react-router-dom';
import { MdOutlineSouth } from 'react-icons/md';
import './style.scss';

export default function ScrollDown() {
  return (
    <div className='scroll-down position-absolute bottom-0 d-flex flex-column justify-content-center text-white mb-3'>
      <Link to='projects' spy='true' smooth='true' duration={500} offset={-70}>
        <p className='text-white text-lowercase fst-italic m-0'>
          See what I made
        </p>
        <span>
          <MdOutlineSouth />
        </span>
      </Link>
    </div>
  );
}
