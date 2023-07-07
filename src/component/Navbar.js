import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'; // installed by npm install styled-components

// Define a styled component for the navbar buttons login and signup
const NavbarButtons = styled.div`
  margin-left: auto;
`;


export const Navbar = () => {
  let location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand px-4" to="/">
          I-NoteBook ✅
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                Home <i className="fa-solid fa-house" style={{ color: '#ffffff' }}></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

          <NavbarButtons className="d-flex justify-content-end">
            <Link className="btn btn-primary mx-2" to='/login' role='button' type="submit">
              Login
            </Link>
            <Link className="btn btn-primary mx-2" to='/signup' role='button'  type="submit">
              Signup
            </Link>
          </NavbarButtons>
        </div>
      </div>
    </nav>
  );
};
