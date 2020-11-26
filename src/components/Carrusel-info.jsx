import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from "react";
//import Carousel from "../src/componentes/Carousel";

export default class Carrousel extends Component {
  render(){
    return(
<>

<Carousel >


  <Carousel.Item  className="Carrousel1">
    <img 
      className="d-block w-100 "
      src="https://alquilesufinca.com/wp-content/uploads/2019/09/img-San-Jeronimo-municipios-pequen%CC%83as.jpg"
      alt="Imagen de la casa de la finca "
    />
    
    
  </Carousel.Item>
  <Carousel.Item className="Carrousel1">
    <img 
      className="d-block w-100 "
      src="https://cdni.rt.com/actualidad/public_images/2017.01/article/588d82ccc46188be6d8b4576.jpg"
      alt="Entrada a la finca"
    />

    
  </Carousel.Item>
  <Carousel.Item className="Carrousel1">
    <img 
      className="d-block w-100 "
      src="https://www.ambientum.com/wp-content/uploads/2018/03/arboles-altos-bosque-696x522.jpg"
      alt="Árboles"
    />

  
  </Carousel.Item>


</Carousel>

</>
    );
      }
      }