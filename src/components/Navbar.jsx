// src/components/Navbar.jsx
import { clientConfig } from "../config/clientConfig";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg border-bottom border-secondary">
      <div className="container">
        <a className="navbar-brand fw-bold text-info" href="#">
          💈 {clientConfig.shopName}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarBarber"
          aria-controls="navbarBarber"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarBarber">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#turnos">
                Turnos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#barberos">
                Barberos
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled text-secondary small">
                {clientConfig.address}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
