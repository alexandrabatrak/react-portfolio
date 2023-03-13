import { Link } from 'react-router-dom';
import './style.scss';

export default function Footer() {
  return (
    <footer>
      <div className='hire-me'>
        <p>Lemme do it for you</p>
        <Link to='/contact'>Hire me</Link>
      </div>
      <p>
        Coded with * Copyright &copy; {new Date().getFullYear()} Alexandra
        Batrak
      </p>
    </footer>
  );
}
