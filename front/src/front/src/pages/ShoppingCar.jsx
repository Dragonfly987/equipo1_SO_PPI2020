import React, { Component } from "react";
import ShoppingCar from "../components/ShoppingCar";
import Footer from "../components/Footer";
import "../Footer.css";
import "../ShoppingCar.css"
export default class Compras extends Component {
  render() {
    return (
      <>
       
            <ShoppingCar />
           
            <Footer />
      </>
    );
  }
}
