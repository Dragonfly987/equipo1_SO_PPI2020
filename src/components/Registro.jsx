import { Nav, Modal, Button, Form, Col } from "react-bootstrap";
import React, { Component } from "react";
import axios from "axios";

const url = "https://backco2bon.herokuapp.com";

export default class main extends Component {
  state = {
    usuario: [],
    show: false,
    modalEliminar: false,
    form: {
      documento: "",

      nombre: "",
      apellido: "",
      email: "",
      direccion: "",
      vendedor: "",
      nombre_usuario: "",
      telefono_celular: "",
      conntraseña: ""
    },
    codigo_user: ""
  };

  //Manejar los cambios del formulario

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  };

  //Mostrar y ocultar el modal

  showModal = () => {
    this.setState({ show: !this.state.show });
  };

  //Petición GET a la API

  // Petición POST a la API

  peticionPost = async () => {
    await axios
      .post(`${url}nuevo-usuario`, this.state.form)
      .then((response) => {
        this.showModal();
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Petición DELETE a la API

  //Busca el usuario que va a editar o eliminar y trae los datos
  // y los pinta en el formulario cuando se selecciona actualizar

  seleccionarUsaurio = (usuarioMod) => {
    //Encuentra el id del usuario selccionado
    console.log(usuarioMod);
    const usuario = this.state.usuario.find(
      (result) => result.id === usuarioMod
    );

    //Pinta en el formulario los datos que tiene del usuario almacenados
    //en el estado
    this.setState({
      idusuario: usuario.id,
      tipoModal: "actualizar",
      form: {
        documento: usuario.documento,
        tipo_documento: usuario.tipo_documento,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.correo,
        dirección: usuario.direccion,
        vendedor: usuario.vendedor,
        nombre_usuario: usuario.nombre_usuario,
        telefono_celular: usuario.telefono_celular
      }
    });
  };

  render() {
    const { form } = this.state;
    return (
      <>
        {/*INICIO Tabla*/}

        <div className="btnx">
          <Button
            className="btn btn-success"
            onClick={() => {
              this.setState({ form: "", tipoModal: "insertar" });
              this.showModal();
            }}
          >
            Nuevo Usuario
          </Button>
        </div>

        {/*Fin Tabla*/}

        {/*Modal del formulario */}

        <Modal show={this.state.show} animation={false}>
          <Modal.Header>
            <Modal.Title>Nuevo Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Row>
              <Form.Group as={Col} controlId="nombres">
                <Form.Label>Nombre(s) *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre(s) completo(s)"
                  name="nombres"
                  required="required"
                  onChange={this.handleChange}
                  value={form ? form.nombre : ""}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="apellidos">
                <Form.Label>Apellido(s)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Apellidos completo"
                  name="apellidos"
                  onChange={this.handleChange}
                  value={form ? form.apellido : ""}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="documento">
                <Form.Label>Documento *</Form.Label>
                <Form.Control
                  type="text"
                  minLength="7"
                  maxLength="11"
                  name="documento"
                  placeholder="Documento de identidad"
                  onChange={this.handleChange}
                  value={form ? form.documento : ""}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="correo">
                <Form.Label>Correo *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite el correo"
                  name="correo"
                  onChange={this.handleChange}
                  value={form ? form.email : ""}
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="numero_expediente">
                <Form.Label>Dirección (*)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="DIgite la dirección "
                  name="numero_expediente"
                  required="required"
                  onChange={this.handleChange}
                  value={form ? form.direccion : ""}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="tipo_documento">
                <Form.Label>Vendedor (*)</Form.Label>
                <Form.Control
                  as="select"
                  name="tipo_documento"
                  onChange={this.handleChange}
                  value={form ? form.vendedor : ""}
                  required
                >
                  <option value="">seleccione...</option>
                  <option value="si">Si</option>
                  <option value="no">No</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="numero_expediente">
                <Form.Label>Contraseña(*)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite la contraseña"
                  name="numero_expediente"
                  required="required"
                  onChange={this.handleChange}
                  value={form ? form.contraseña : ""}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="numero_expediente">
                <Form.Label>Nombre de usuario(*)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite el nombre de usuario"
                  name="numero_expediente"
                  required="required"
                  onChange={this.handleChange}
                  value={form ? form.nombre_usuario : ""}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="telefono_celular">
                <Form.Label>Celular</Form.Label>
                <Form.Control
                  type="text"
                  minLength="5"
                  maxLength="11"
                  placeholder="Número celular"
                  name="telefono_celular"
                  onChange={this.handleChange}
                  value={form ? form.telefono_celular : ""}
                />
              </Form.Group>
            </Form.Row>
          </Modal.Body>
          <Modal.Footer>
            {this.state.tipoModal === "insertar" ? (
              <button
                className="btn btn-success"
                onClick={() => this.peticionPost()}
              >
                Insertar
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => this.peticionPut()}
              >
                Actualizar
              </button>
            )}
            <button className="btn btn-danger" onClick={() => this.showModal()}>
              Cancelar
            </button>
          </Modal.Footer>
        </Modal>
        {/* Fin Modal del formulario */}

        {/* Inicio Modal del Botón Eliminar */}

        <Modal show={this.state.modalEliminar}>
          <Modal.Footer>
            <button
              className="btn btn-danger"
              onClick={() => this.peticionDelete()}
            >
              Sí
            </button>
            <button
              className="btn btn-secundary"
              onClick={() => this.setState({ modalEliminar: false })}
            >
              No
            </button>
          </Modal.Footer>
        </Modal>
        <section className="form-register1">
          <p>
            ¿Ya tienes una cuenta?<a href="/Login"> Iniciar sesión </a>
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
