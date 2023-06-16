import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'


export const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);

  }, [location])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand px-4" to="/">I-NoteBook ✅</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : " "}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : " "}`} to="/about">About</Link>
            </li>
          </ul>

          {/* <form className="d-flex">
      <input className="form-control me-2" type="search"     placeholder="Search" aria-label="Search"/>

      <button className="btn btn-outline-success " type="submit">Search</button>
    </form> */}
        </div>
      </nav>
    </>

  )
}
