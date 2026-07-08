import React from 'react'
import { Link } from 'react-router-dom'
import '../Nav.css'
function Navabar() {
  return (
<div className="nav-wrapper">
  <nav className="navbar navbar-expand-lg premium-navbar px-4">

    <Link
      to="/home"
      className="navbar-brand logo text-white fw-bold fs-3"
    >
      JobPortal
    </Link>

    <ul className="navbar-nav ms-auto">

      <li className="nav-item">
        <Link to="/home" className="nav-link premium-link">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/contact" className="nav-link premium-link">
          Contact
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/about-us" className="nav-link premium-link">
          About Us
        </Link>
      </li>

    </ul>

  </nav>
</div>
  )
}

export default Navabar