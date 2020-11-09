import { Nav } from "react-bootstrap";

import React, { Component } from "react";

export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        nombre: "",
        clave: "",
        clave1: "",
        correo: ""
      }
    };
    this.handelChance = this.handelChance.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }
  handelChance(event) {
    const { name, value } = event.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      }
    });
  }

  handelSubmit(event) {
    event.preventDefault();
    const values = JSON.stringfy(this.state.values);
    alert(values);
  }

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
        <form>
          <section className="form-register">
            <h1> Crear cuenta</h1>
            <p>Tu nombre</p>
            <input
              className="controls"
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre y Apellido"
              require=""
            />

            <p>Correo electronico</p>
            <input
              className="controls"
              type="text"
              name="correo"
              id="correo"
              placeholder=""
              require=""
            />

            <p>Contraseña</p>
            <input
              minlength="6"
              className="controls"
              type="password"
              name="clave"
              id="clave"
              placeholder="Como mínimo 6 caracteres"
              require=""
            />

            <p>Vuelve a escribir la contraseña</p>
            <input
              className="controls"
              type="password"
              name="clave1"
              id="clave1"
              placeholder=""
              require=""
            />

            <Nav className="boton">
              <input
                name="Crear"
                className="registrar"
                type="submit"
                value="Registrar"
                id="Crear"
              />
            </Nav>
          </section>
        </form>
        <section className="form-register1">
          <p>
            ¿Ya tienes una cuenta?<a href="/"> Iniciar sesión </a>
          </p>

          <p>
            Al crear una cuenta, aceptas las
            <span>
              {" "}
              <a href="/">Condiciones de Uso</a> y el{" "}
              <a href="/">Aviso de Privacidad</a>{" "}
            </span>
            de CO2BON
          </p>
        </section>
      </>
    );
  }
}
