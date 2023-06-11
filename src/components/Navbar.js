import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function NavbarModel() {
  return (
    <section className="navbar">
      <section className="links">
        <h3 className="links">
          <u>PP RH Tester</u>
        </h3>
        <Link className="links" aria-current="page" to="/">
          <strong>Home</strong>
        </Link>
      </section>
    </section>
  );
}
export default NavbarModel;
