import React from "react";
import Pusher from "pusher-js";
import Axios from "axios";

class Order extends React.Component {
   state = {
      data: []
   };

   componentDidMount() {
      const data = Axios.get("https://foodx-api.herokuapp.com/api/orders")
         .then(res => {
            this.setState({
               data: res.data
            });
         })
         .catch(err => {
            console.log(err);
         });

      const pusher = new Pusher("93d33b6256a37fd6c03e", {
         cluster: "ap2",
         encrypted: true
      });
      const channel = pusher.subscribe("fassos");
      channel.bind("order", data => {
         this.setState({
            data: [...this.state.data, data]
         });
      });
   }

   handleClick = data => {
      console.log(data);
      let { _id: id, quantity, createdTillNow } = data;
      createdTillNow += createdTillNow + quantity;
   };
   render() {
      return (
         <div>
            {this.state.data.length > 0 ? (
               <table>
                  <tr>
                     <th> Name</th>
                     <th> Quantity</th>
                     <th>Created Till Now</th>
                     <th> Predicted</th>
                     <th>Status</th>
                  </tr>
                  {this.state.data.map((order, index) => {
                     const {
                        _id: id,
                        name,
                        quantity,
                        createdTillNow,
                        predictedValue
                     } = order;
                     return (
                        <tr style={{ textAlign: "center" }} key={index}>
                           <td key={index}>{name}</td>
                           <td>{quantity}</td>
                           <td>{createdTillNow}</td>
                           <td>{predictedValue}</td>
                           <td>
                              <button onClick={() => this.handleClick(order)}>
                                 Done
                              </button>
                           </td>
                        </tr>
                     );
                  })}
               </table>
            ) : (
               "Loading...."
            )}
         </div>
      );
   }
}
export default Order;
