import React from "react";

import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="navbar-text">¿Deseas ver estadisticas del video?</p>
      <a className="btn btn-primary">Si</a>
      <a className="btn btn-secundary">No</a>
    </div>
  );
};

export default Navbar;
