import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ darkBg, classOption }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector(".header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <header className={`header ${classOption}`}>
        <nav
          className={`navbar navbar-expand-lg fixed-top ${darkBg ? "bg-transparent" : "custom-nav white-bg"
            } ${scroll > headerTop ? "affix" : ""}`}
        >
          <div className="container">
            <Link to="/" className="navbar-brand">
              {darkBg ? (
                <img
                  src="assets/img/phil-macleod-white-high-res.png"
                  width="120"
                  alt="logo"
                  className="img-fluid"
                />
              ) : (
                <img
                  src="assets/img/logo-color-1x.png"
                  width="120"
                  alt="logo"
                  className="img-fluid"
                />
              )}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="ti-menu"></span>
            </button>
            <div
              className="collapse navbar-collapse main-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <Link
                    to="/"
                    className="nav-link  dropdown-toggle"
                    href="#"
                    id="navbarDropdownHome"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </Link>
                  <div
                    className="dropdown-menu submenu"
                    aria-labelledby="navbarDropdownHome"
                  >
                   
                  </div>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link" smooth to='#about'>
                    About
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link" smooth to="#features">
                    Features
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link" smooth to="#pricing">
                    Pricing
                  </HashLink>
                </li>
             
                <li className="nav-item">
                  <HashLink className="nav-link" smooth to="#contact">
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
