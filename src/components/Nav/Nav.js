import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SoundIcon from '../../extra-components/SoundIcon/SoundIcon';
import './style.scss';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header>
      <nav
        className={`nav ${scrolled ? 'scrolled' : ''}${isHome ? 'home' : ''}`}>
        <div className='nav-container'>
          <div className='nav-item-wrapper'>
            <Link className='nav-brand' to='/'>
              A.
            </Link>
          </div>
          <div className='nav-menu'>
            <NavLink
              to='/'
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>
              Home
            </NavLink>
            <NavLink
              to='/projects'
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>
              Projects
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>
              About
            </NavLink>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>
              Contact
            </NavLink>
          </div>
          <div className='nav-item-wrapper'>
            <SoundIcon />
          </div>
        </div>
      </nav>
    </header>
  );
}
