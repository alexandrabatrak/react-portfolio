import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SoundIcon from "../SoundIcon/SoundIcon";
import { useMediaQuery } from "react-responsive";

import "./nav.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrolledUp, setScrolledUp] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navIconRef = useRef(null);
  const navMenuRef = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    let prevScrollY = window.scrollY;
    const onScroll = () => {
      const scrolledUp = window.scrollY < prevScrollY && window.scrollY > 300;
      setScrolled(window.scrollY > 100);
      setScrolledUp(scrolledUp);
      prevScrollY = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <nav
        className={`nav ${scrolled && !scrolledUp ? "scrolled" : ""} ${
          scrolledUp ? "scrolled-up" : ""
        } ${isHome ? "home" : ""}`}>
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
              <div className='nav-icon-word'>{isOpen ? "Close" : "Menu"}</div>
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
              {isTabletOrMobile ? "A." : "Alexandra Batrak"}
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
