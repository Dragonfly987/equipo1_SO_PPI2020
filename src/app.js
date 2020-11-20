import React from "react";
import "./estilos.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Sale from "./pages/Sale";
import Home from "./pages/Home";
import Compras from "./pages/Compras";
import ShoppingCar from "./pages/ShoppingCar";
import Sale1 from "./pages/Register_product";
import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Sale" component={Sale} />
        <Route exact path="/Sale1" component={Sale1} />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/Compra" component={Compras} />
          <Route exact path="/carrito-compras" component={ShoppingCar} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
