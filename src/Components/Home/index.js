import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <div>
         <ul>
            <li>
               <Link to="/orders">List of Orders</Link>
            </li>
            <li>
               <Link to="/add">Create an Order</Link>
            </li>
         </ul>
      </div>
   );
};
export default Home;
