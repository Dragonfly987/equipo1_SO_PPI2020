import { Nav } from "react-bootstrap";

import React, { Component } from "react";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        clave: "",
        correo: ""
      }
    };
    this.handelChance = this.handelChance.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelChance(event) {
    const { clave, value } = event.targer;
    this.setState({
      values: {
        ...this.state.values,
        [clave]: value
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
      <form onSumit={this.handelSubmit}>
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
            <h1>Iniciar sesión</h1>

            <p>Dirección de correo electronico</p>
            <input
              className="controls"
              type="text"
              name="correo"
              value={this.state.correo}
              onChange={this.handelChance}
              id="correo"
              placeholder=""
              require=""
            />

            <p>Contraseña</p>
            <input
              value={this.state.clave}
              onChange={this.handelChance}
              minLength="6"
              className="controls"
              type="password"
              name="clave"
              id="clave"
              placeholder="Como mínimo 6 caracteres"
              require=""
            />

            <section className="form-register2">
              <a href="/"> ¿Olvidaste tu contraseña? </a>
            </section>

            <Nav className="boton">
              <input
                name="Crear"
                className="registrar"
                type="submit"
                value="Iniciar sesión"
                id="Crear"
              />
            </Nav>
          </section>
        </form>
        <section className="form-register1">
          <p>
            ¿No tienes una cuenta?<a href="/"> Registrate</a>
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
      </form>
    );
  }
}
