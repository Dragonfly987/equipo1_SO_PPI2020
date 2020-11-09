import React, { Component } from "react";
import Carrousel from "../components/Carrusel-info";
import Info from "../components/Info";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import "../Footer.css";
export default class Compras extends Component {
  render() {
    return (
      <>
       
            <Intro />
            <Carrousel />
            <Info />
            <Footer />
          
      </>
    );
  }
}
