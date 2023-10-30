import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav>
        <ul className="nav-ul">
          <li className="nav-item">
            <Link to="/login" className="nav-links">
              Prijava
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-links">
              Registracija
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/#" className="nav-links">
            <i className={"fas fa-bars"} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
