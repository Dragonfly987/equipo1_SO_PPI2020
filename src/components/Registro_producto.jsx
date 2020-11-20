import { Nav, Modal, Button, Form, Col } from "react-bootstrap";
import React, { Component } from "react";
import axios from "axios";

const url = "https://backco2bon.herokuapp.com";

export default class main extends Component {
  state = {
    producto: [],
    show: false,
    modalEliminar: false,
    form: {
      nombre: "",
      descuento: "",
      descripción: "",
      precio: ""
    },
    codigo_producto: ""
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
      .post(`${url}nuevo-producto`, this.state.form)
      .then((response) => {
        this.showModal();
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Petición DELETE a la API

  //Busca el producto que va a editar o eliminar y trae los datos
  // y los pinta en el formulario cuando se selecciona actualizar

  seleccionarUsaurio = (productoMod) => {
    //Encuentra el id del producto selccionado
    console.log(productoMod);
    const producto = this.state.producto.find(
      (result) => result.id === productoMod
    );

    //Pinta en el formulario los datos que tiene del producto almacenados
    //en el estado
    this.setState({
      idproducto: producto.id,
      tipoModal: "actualizar",
      form: {
        nombre: producto.nombre,
        descuento: producto.descuento,
        descripcion: producto.descripcion,
        precio: producto.precio
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
            Nuevo producto
          </Button>
        </div>

        {/*Fin Tabla*/}

        {/*Modal del formulario */}

        <Modal show={this.state.show} animation={false}>
          <Modal.Header>
            <Modal.Title>Nuevo producto</Modal.Title>
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
                <Form.Label>desuento(s)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="descuento en %"
                  name="apellidos"
                  onChange={this.handleChange}
                  value={form ? form.decuento : ""}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="documento">
                <Form.Label>Descripción *</Form.Label>
                <Form.Control
                  type="text"
                  minLength="10"
                  name="documento"
                  placeholder="Descripcuión del producto"
                  onChange={this.handleChange}
                  value={form ? form.descripcion : ""}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="correo">
                <Form.Label>precio*</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Digite el precio"
                  name="correo"
                  onChange={this.handleChange}
                  value={form ? form.precio : ""}
                  required
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
            Al crear un producto, aceptas las
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
