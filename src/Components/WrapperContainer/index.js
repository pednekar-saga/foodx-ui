import React from "react";
import { Container, Grid } from "semantic-ui-react";
import SideBar from "../SideBar";
import Order from "../Order";
import FoodTable from "../FoodTable";

const BodyContainer = () => {
   return (
      <Grid>
         <Grid.Row>
            <Grid.Column width={2}>
               <SideBar />
            </Grid.Column>
            <Grid.Column width={10}>
               <FoodTable />
            </Grid.Column>
         </Grid.Row>
      </Grid>
   );
};

export default BodyContainer;
