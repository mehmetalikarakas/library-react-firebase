import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Library</h1>
      <ul>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="/login">Giriş</Link>
        </li>
        <li>
          <Link to="/signup">Üye Ol</Link>
        </li>
        <li>Çıkış</li>
      </ul>
    </nav>
  );
};

export default Navbar;
