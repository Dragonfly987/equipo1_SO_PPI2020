import { Button, Form, FormControl } from "react-bootstrap";
import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { CartIcon } from "./icons";
import styles from "./header.module.scss";
const Header = () => {
  const itemCount = useContext(CartContext);

  return (
    <>
      <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div className="container">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div>
            <img
              className="imgp"
              src="https://raw.githubusercontent.com/Dragonfly987/prueba/master/logo.jpeg"
              alt="Logo del proyecto"
            />
          </div>

          <div
            className="navbar-collapse collapse justify-content-center"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="" className="nav-link">
                  Ayuda
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Sobre nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Sale1" className="nav-link">
                  Vender
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Bonos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Register" className="nav-link">
                  Registro
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Login" className="nav-link">
                  Iniciar sesión
                </Link>
              </li>

              <header className={styles.header}>
                <li className="nav-item1">
                  <Link to="/cart">
                    {" "}
                    <CartIcon /> Carrito({itemCount})
                  </Link>
                </li>
              </header>
            </ul>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Buscar..."
                className="mr-sm-2"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
