import {  } from "react-bootstrap";
import {Link} from "react-router-dom";
import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      
    

          <section className="section-property section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Lista de Propiedades</h2>
              </div>
              <div className="title-link">
                <a href="/">Todas las propiedades
                  <span className="ion-ios-arrow-forward"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="property-carousel" className="owl-carousel owl-theme">
          <div className="carousel-item-b">
            <div className="card-box-a card-shadow">
              <div >
                <img  src="https://www.dicyt.com/data/25/5625.jpg" alt="imagen de una propiedad" className="img-a img-fluid"/>
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                  <h2 className="card-title-a">
                    <a href="/"> Venecia- Antioquia </a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">Renta | $ 5.500.000</span>
                    </div>
                    <Link to="/Compra" className="link-a">Click aquí para ver
                      <span className="ion-ios-arrow-forward"></span>
                    </Link>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Área</h4>
                        <span>5 hectareas
                        
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Árboles</h4>
                        <span>4.500</span>
                      </li>
                      
                    
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item-b">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src="https://www.dicyt.com/data/25/5625.jpg" alt="imagen de una propiedad" className="img-a img-fluid"/>
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                    <a href="/"> Ciudad Bolivar- Antioquia </a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">Venta | $ 3.000.000</span>
                    </div>
                    <Link to="/Compra" className="link-a">Click aquí para ver
                      <span className="ion-ios-arrow-forward"></span>
                    </Link>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Área</h4>
                        <span>2.5 hectareas
                        
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Árboles</h4>
                        <span>2.000</span>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item-b">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src="https://www.dicyt.com/data/25/5625.jpg" alt="imagen de una propiedad" className="img-a img-fluid"/>
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                    <a href="/"> Cartagena -Bolivar</a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">Venta | $12.000.000</span>
                    </div>
                    <Link to="/Compra" className="link-a">Click aquí para ver
                      <span className="ion-ios-arrow-forward"></span>
                    </Link>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Área</h4>
                        <span>9.5 hectareas
                        
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Árboles</h4>
                        <span>10.000</span>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item-b">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src="https://www.dicyt.com/data/25/5625.jpg" alt="imagen de una propiedad" className="img-a img-fluid"/>
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="/"> Amazonas- Colombia</a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">Renta | $ 1.200.000</span>
                    </div>
                    <Link to="/Compra" className="link-a">Click aquí para ver
                      <span className="ion-ios-arrow-forward"></span>
                    </Link>
                  </div>
                  <div className="card-footer-a">
                    <ul className="card-info d-flex justify-content-around">
                      <li>
                        <h4 className="card-info-title">Área</h4>
                        <span>2 hectareas
                          
                        </span>
                      </li>
                      <li>
                        <h4 className="card-info-title">Árboles</h4>
                        <span>1500</span>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
             
        
     
   
    );
  }
}