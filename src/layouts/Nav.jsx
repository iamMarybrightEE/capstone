import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import './nav.scss';
import logo from '../assets/img/logo.png';
import hamburgerIconMenu from '../icons/hamburger-menu.svg';
import navLinks from '../utils/links';

const Nav = () => {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="container grid nav-bar">
      <Link className="nav-bar-logo" to={'/'}>
        <img src={logo} alt="Little Lemon logo" />
      </Link>
      <button
        className="nav-bar-hamburger"
        type="button"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        {isNavExpanded ? (
          'X'
        ) : (
          <img src={hamburgerIconMenu} alt="Navigation icon menu" />
        )}
      </button>
      <ul
        className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'}
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        {navLinks.map((navLink, index) => (
          <li key={index}>
            <Link
              className={pathname === navLink.anchor ? 'current-location' : ''}
              to={navLink.anchor}
            >
              {navLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
