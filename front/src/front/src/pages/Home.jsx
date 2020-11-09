import React, { Component } from "react";
import Carrousel from "../components/Carrusel-info";
import List from "../components/List";
import Footer from "../components/Footer";
import "../estilos.css";
import "../Footer.css";
export default class Home extends Component {
  render() {
    return (
      <>
       
            <Carrousel />
            <List />
            <Footer />
          
      </>
    );
  }
}
