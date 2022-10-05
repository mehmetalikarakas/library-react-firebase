import React from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();

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
        <li>
          <Button
            label="Çıkış"
            className="p-button-rounded p-button-danger"
            onClick={logout}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
