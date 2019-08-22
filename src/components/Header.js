import React from "react";
import "./header.styles.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav>
        <ul className="header-container">
          <div className="header-title">
            <Link to="/" className="header-title-link">
              Lord of the Rings Library
            </Link>
          </div>
          <div className="header-grid">
            <li>Books</li>
            <li>Movies</li>
            <Link to="/people" className="header-link">
              Characters
            </Link>
            <li>Quotes</li>
            <li>Chapters</li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
