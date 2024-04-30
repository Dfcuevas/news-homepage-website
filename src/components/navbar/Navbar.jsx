import { useState } from "react";
import "./_navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="/logo.svg"
          alt="User homepage Logo"
          className="logo-container__img"
        />
      </div>
      <nav className={`nav ${showMenu ? "pruebAnimation" : "display-none"}`}>
        <ul className="nav__list">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
      <div className="menu-btn">
        {showMenu ? (
          <img
            src="/icon-menu-close.svg"
            alt="Close hamburguer menu"
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <img
            src="/icon-menu.svg"
            alt="Open hamburguer menu"
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
