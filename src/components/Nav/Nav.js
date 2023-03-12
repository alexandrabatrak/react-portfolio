import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.scss';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className='nav-container'>
          <Link className='navbar-brand' to='/'>
            A.
          </Link>
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
        </div>
      </nav>
    </header>
  );
}
