import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SoundIcon from "../SoundIcon/SoundIcon";
import "./nav.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  // const menu = document.querySelector(".nav-menu");
  // const navIcon = document.querySelector(".nav-icon");
  const navIconRef = useRef(null);
  const navMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const toggleMenu = () => {
  //   const arr = [navIcon, menu];
  //   arr.length > 0 && arr.forEach((el) => el.classList.toggle("open"));
  // };
  // const closeMenu = () => {
  //   [navIcon, menu].forEach((el) => el.classList.remove("open"));
  // };

  useEffect(() => {
    const handleNavClick = () => {
      setIsOpen(false);
    };
    const navLinks = navMenuRef.current.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavClick);
      });
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <nav
        className={`nav ${scrolled ? "scrolled" : ""} ${isHome ? "home" : ""}`}>
        <div className='nav-container'>
          <div className='nav-item-wrapper'>
            <div
              className={`nav-icon ${isOpen ? "open" : ""}`}
              tabIndex='0'
              ref={navIconRef}
              onClick={toggleMenu}>
              <div className='icon'>
                <div className='circle circle-1'></div>
                <div className='circle circle-2'></div>
                <div className='circle circle-3'></div>
              </div>
            </div>
          </div>
          <div className={`nav-menu ${isOpen ? "open" : ""}`} ref={navMenuRef}>
            <NavLink
              to='/'
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Home
            </NavLink>
            <NavLink
              to='/projects'
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Projects
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              About
            </NavLink>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Contact
            </NavLink>
          </div>
          <div className='nav-item-wrapper'>
            <Link className='nav-brand' to='/'>
              A.
            </Link>
          </div>
          <div className='nav-item-wrapper'>
            <SoundIcon />
          </div>
        </div>
      </nav>
    </header>
  );
}
