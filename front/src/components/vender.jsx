import { Nav } from "react-bootstrap";

import React, { Component } from "react";

export default class main extends Component {
  render() {
    return (
<>


<div className="img1_0">
          <a href="/">
            <img className="img1"
              src="https://raw.githubusercontent.com/Dragonfly987/prueba/master/logo.jpeg"
              alt="Logo de CO2BON"
            />
          </a>
        </div>
 {/* <!-- action="../Control/user_control.php" method="post"  */}
<form >

    <section className="form-register">
        <h1> Hola! para vender, debes de ingresar a tu cuenta</h1>
        
    <Nav className="boton">
    <input  name="Crear" className="registrar" type="submit" value="Soy Nuevo"  id="Crear"/>
    </Nav>
    <Nav className="boton">
    <input  name="Crear" className="registrar" type="submit" value="Ya tengo una cuenta"  id="Crear"/>
    </Nav>
 
    


    </section> 
    </form>
    
</>
    );
    }
  }