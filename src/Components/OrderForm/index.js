import React, { Component } from "react";
import Axios from "axios";

export default class OrderForm extends Component {
   state = {
      order: {
         name: "",
         quantity: "",
         predictedValue: ""
      },
      message: ""
   };
   handleChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
         order: {
            ...this.state.order,
            [name]: value
         }
      });
   };

   handleSubmit = async e => {
      e.preventDefault();
      const { name, quantity, predictedValue } = this.state.order;
      if (!!this.state.order) {
         await Axios({
            url: "https://foodx-api.herokuapp.com/api/order",
            method: "POST",
            data: { name, quantity, predictedValue }
         })
            .then(res => {
               this.setState({
                  message: "Order created Successfully",
                  order: {
                     name: "",
                     quantity: "",
                     predictedValue: ""
                  }
               });
            })
            .catch(error => {
               this.setState({
                  message: "Error while adding order"
               });
            });
      } else {
         this.setState({
            message: "Value cannot be empty"
         });
      }
   };
   render() {
      return (
         <div>
            {this.state.message && <p>{this.state.message} </p>}
            <form onSubmit={this.handleSubmit}>
               <input
                  type="text"
                  name="name"
                  placeholder="Name of the Food"
                  onChange={this.handleChange}
                  value={this.state.order.name}
               />
               <input
                  type="integer"
                  name="quantity"
                  placeholder="Quantity"
                  onChange={this.handleChange}
                  value={this.state.order.quantity}
               />
               <input
                  type="text"
                  name="predictedValue"
                  placeholder="Predicted Value"
                  onChange={this.handleChange}
                  value={this.state.order.predictedValue}
               />
               <input type="submit" value="Submit" />
            </form>
         </div>
      );
   }
}
