import { Nav, Navbar, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Header() {
  const [activeLink, setActiveLink] = useState('home');
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

  const updateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <header>
      <Navbar
        className={scrolled ? 'scrolled' : ''}
        bg='light'
        variant='light'
        fixed='top'>
        <Container>
          <Navbar.Brand href='#home'>A.</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link
                href='#home'
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => updateActiveLink('home')}>
                Home
              </Nav.Link>
              <Nav.Link
                href='#projects'
                className={
                  activeLink === 'projects'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => updateActiveLink('projects')}>
                Projects
              </Nav.Link>
              <Nav.Link
                href='#contact'
                className={
                  activeLink === 'contact'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => updateActiveLink('contact')}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
