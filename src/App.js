import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Order from "./Components/Order";
import OrderForm from "./Components/OrderForm";
import Home from "./Components/Home";

const App = () => (
   <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/add" component={OrderForm} />
      <Route exact path="/orders" component={Order} />
   </BrowserRouter>
);

export default App;
