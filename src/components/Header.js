import React from "react";
import "./styles.components.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav>
        <ul className="header-container">
          <div className="header-title">
            <h1>Lord of the Rings Library</h1>
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
