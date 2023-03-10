import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
      <Navbar
        className={scrolled ? 'scrolled' : ''}
        bg='black'
        variant='dark'
        fixed='top'>
        <Container>
          <Link className='navbar-brand' to='/'>
            A.
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
