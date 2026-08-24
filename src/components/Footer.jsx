import React from 'react'
import Logo from "../assets/library.svg"

const footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <a href="/">
                <figure className="footer__logo">
                <img src={Logo} className="footer__logo--img" alt=""/>
                </figure>
                </a>
                <div className="footer__list"></div>
                <a href="/" className="footer__link">
                Home
                </a>
                <span className="footer__link no  cursor">About</span>
                <a href="/books" className="footer__link">
                Books
                </a>
                <a href="/cart" className="footer__link">
                Cart
                </a>
        </div>
        <div className="footer copyright">Copyright &copy; 2023 Library. All rights reserved.
        </div>
        </div>
    </footer>
  )
}

export default footer