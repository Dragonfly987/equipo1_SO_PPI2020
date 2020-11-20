import React, { Component } from "react";

export default class main extends Component {
  render() {
    return (

<container>


<section className="intro-single">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="title-single-box">
             <input type="text" name="dirección"   placeholder="Departamento y País"/> 
              <span className="color-text-a">Venecia, calle 98</span>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className="item" href="/">Casa</a>
                </li>
                <li className="breadcrumb-item">
                  <a className="item" href="/">Propiedades</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                Venecia, calle 98
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

</container>





    );
    }
  }