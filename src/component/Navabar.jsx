import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Nav.css'
function Navabar() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token")
    
    navigate("/login")
  };
  return (
    <section id='navbar'>
    <div className="nav-wrapper">
      <nav className="navbar navbar-expand-lg premium-navbar px-4">

        <Link
          to="/"
          className="navbar-brand logo text-white fw-bold fs-3"
        >
          JobPortal
        </Link>

        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link to="/" className="nav-link premium-link">
              Home
            </Link>
          </li>
         
          <li className="nav-item">
            <a href="#contact" className="nav-link premium-link">Contact</a>
          </li>

          <li className="nav-item">
            <a href='#contact' className="nav-link premium-link">
              About Us
            </a>
          </li>
          <li className="nav-item">

            <button className='btn btn-dark'
              onClick={handleLogout}>
              Logout
            </button>

          </li>

        </ul>

      </nav>
    </div>
    </section>
  )
}

export default Navabar