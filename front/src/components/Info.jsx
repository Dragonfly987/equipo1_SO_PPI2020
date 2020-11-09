import React, { Component } from "react";
import Iframe from 'react-iframe'
import {Link} from "react-router-dom";
export default class main extends Component {
 
  render() {
    return (
<>
<section className="property-single nav-arrow-b">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            
            <div className="row justify-content-between">
              <div className="col-md-5 col-lg-4">
                <div className="property-price d-flex justify-content-center foo">
                  <div className="card-header-c d-flex">
                    <div className="card-box-ico">
                      <span className="ion-money">$</span>
                    </div>
                    <div className="card-title-c align-self-center">
                      <h5 className="title-c">4.000.000</h5>
                    </div>
                  </div>
                </div>
                <div className="property-summary">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="title-box-d section-t4">
                        <h3 className="title-d">Descripción rapida</h3>
                      </div>
                    </div>
                  </div>
                  <div className="summary-list">
                    <ul className="list">
                      <li className="d-flex justify-content-between">
                        <strong>ID de la propiedad:</strong>
                        <span>1134</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <strong>localización:</strong>
                        <span>Venecia, calle 98</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <strong>Tipo de propiedad:</strong>
                        <span>Finca</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <strong>Estado:</strong>
                        <span>renta </span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <strong>Area:</strong>
                        <span>10 hectareas
                         
                        </span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <strong>árboles</strong>
                        <span>9500</span>
                      </li>
                      
                      <li className="d-flex justify-content-between">
                        <strong>Rios/quebradas:</strong>
                        <span>4</span>
                      </li>
                    </ul>
                    <div class="col-md-12">
                        < Link to="/carrito-compras" type="submit" class="btn btn-a agregar-carrito">Comprar</ Link>
                      </div>
                      
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-7 section-md-t3">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="title-box-d">
                      <h3 className="title-d">Descripción de la propiedad</h3>
                    </div>
                  </div>
                </div>
                <div className="property-description">
                  <p className="description color-text-a">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
                    neque, auctor sit amet
                    aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta.
                    Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt
                    nibh pulvinar quam id dui posuere blandit.
                  </p>
                  <p className="description color-text-a no-margin">
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget
                    malesuada. Quisque velit nisi,
                    pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
                  </p>
                </div>
                <div className="row section-t3">
                  <div className="col-sm-12">
                    <div className="title-box-d">
                      <h3 className="title-d">Extras</h3>
                    </div>
                  </div>
                </div>
                <div className="amenities-list color-text-a">
                  <ul className="list-a no-margin">
                    <li>Árboles de todos los tamaños</li>
                    <li>Gran variedad de fauna</li>
                    <li>Variedad de especies de árboles</li>
                    <li>Puedes contar con los servicos de la casa</li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 offset-md-1">
            <ul className="nav nav-pills-a nav-pills mb-3 section-t3" id="pills-tab" role="tablist">
              
              <li className="nav-item">
                <a className="nav-link1" id="pills-plans-tab" data-toggle="pill" href="#pills-plans" role="tab" aria-controls="pills-plans" aria-selected="true">Videos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link1" id="pills-map-tab" data-toggle="pill" href="#pills-map" role="tab" aria-controls="pills-map" aria-selected="true">ubicación</a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
                <Iframe src="/" width="100%" height="460" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></Iframe>
              </div>
              <div className="tab-pane fade" id="pills-plans" role="tabpanel" aria-labelledby="pills-plans-tab">
                <img src="/" alt="" className="img-fluid"/>
              </div>
              <div className="tab-pane fade" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
                {/* Acá va la ubicacion de google map */}
                <Iframe src="/" width="100%" height="460" frameborder="0" allowfullscreen></Iframe>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
</>
    );
  }
}