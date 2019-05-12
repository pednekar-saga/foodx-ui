import React from "react";
import Pusher from "pusher-js";
import Axios from "axios";

class Order extends React.Component {
   state = {
      order: {
         count: 0
      }
   };

   componentDidMount() {
      const pusher = new Pusher("93d33b6256a37fd6c03e", {
         cluster: "ap2",
         encrypted: true
      });
      const channel = pusher.subscribe("fassos");
      channel.bind("order", data => {
         this.setState({
            order: {
               count: data.count
            }
         });
         console.log("From pusher ", data);
      });
   }
   handleSubmit = () => {
      // Axios.post("http://127.0.0.1:4000/message", this.state.message);
   };
   handleChange = e => {
      this.setState({ order: { count: e.target.value } }, () => {
         Axios.post("https://foodx-api.herokuapp.com/message", {
            count: this.state.order.count
         });
      });
   };

   render() {
      return (
         <div>
            {this.state.data}
            Count {this.state.order.count}
            <form>
               <input
                  type="number"
                  onChange={this.handleChange}
                  value={this.state.order.count}
               />
               <button onClick={this.handleSubmit}>Submit</button>
            </form>
         </div>
      );
   }
}
export default Order;
