import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.svg';
import {faBars} from "@fortawesome/free-solid-svg-icons"

const Nav = () => {
  return (
    <nav>
      <div NameName="nav__container">
        <a href="/">
        <img src ={LibraryLogo} alt="" className="logo" />
        <FontAwesomeIcon icon={faBars} />
        </a>
        <ul className='nav__links'>
          <li className="nav__list">
            <a href="/" className="nav__link">
            home
            </a>
          </li>
          <li className='nav__list'>
            <a href="/" className='nav__link'>
            books
            </a>
          </li>
          <button className="btn__menu">
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <a href="/cart" className="nav__link">
            <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
            </a>
            <span className='cart__length'>2</span>
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close">
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className="menu__link">
              Home 
              </a>
            </li>
            <li className="menu__list">
              <a href="/books" className="menu__link">
              Books 
              </a>
            </li>
            <li className="menu__list">
              <a href="/cart" className="menu__link">
              Cart 
              </a>
            </li>
          </ul>
        </div>
  </div>
  </nav>
  );
}

export default Nav;