import React, { Component } from "react";
import "../carrito"

export default class main extends Component {
  render() {
    return (
<>

        <div className="container">
            <div className="row mt-3">
                <div className="col">
                    <h2 className=" conten d-flex justify-content-center mb-3">Realizar Compra</h2>
                    <form id="procesar-pago" action="/" method="post">
                        <div className="form-group row">
                            <label for="cliente" className="col-12 col-md-2 col-form-label h2">Cliente :</label>
                            <div className="col-12 col-md-10">
                                <input type="text" className="form-control" id="cliente"
                                    placeholder="Ingresa nombre cliente" name="destinatario"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="email" className="col-12 col-md-2 col-form-label h2">Correo :</label>
                            <div className="col-12 col-md-10">
                                <input type="text" className="form-control" id="correo" placeholder="Ingresa tu correo" name="cc_to"/>
                            </div>
                        </div>

                        <div id="carrito" className="form-group table-responsive" >
                            <table className="table" id="lista-compra" >
                                <thead>
                                    <tr>
                                        <th scope="col">Imagen</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Sub Total</th>
                                        <th scope="col">Eliminar</th>
                                    </tr>

                                </thead>
                                <tbody >

                                </tbody>
                                <tr>
                                    <th colspan="4" scope="col" className="text-right">SUB TOTAL :</th>
                                    <th scope="col">
                                        <p id="subtotal"></p>
                                    </th>
                                    {/* <!-- <th scope="col"></th> --> */}
                                </tr>
                                <tr>
                                    <th colspan="4" scope="col" className="text-right">IGV :</th>
                                    <th scope="col">
                                        <p id="igv"></p>
                                    </th>
                                  {/*   <!-- <th scope="col"></th> --> */}
                                </tr>
                                <tr>
                                    <th colspan="4" scope="col" className="text-right">TOTAL :</th>
                                    <th scope="col">
                                        <input id="total" name="monto" className="font-weight-bold border-0" readonly ></input>
                                    </th>
                                 {/*    <!-- <th scope="col"></th> --> */}
                                </tr>

                            </table>
                        </div>

                        <div className="row justify-content-center" id="loaders">
                           <img id="cargando" src="/" alt="Imagen de la compra"/>
                        </div>

                        <div className="row justify-content-between">
                            <div className="col-md-4 mb-2">
                                <a href="index.html" className="btn btn-info btn-block">Seguir comprando</a>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <button href="#" className="btn btn-success btn-block" id="procesar-compra">Realizar compra</button>
                            </div>
                        </div>
               

                  </form>
                </div>

               
            </div>
            </div>
      
    

</>
    );
    }
    }
  