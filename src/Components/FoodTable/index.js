import React from "react";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";

const FoodTable = () => (
   <Table color={"blue"} key={"blue"} inverted>
      <Table.Header>
         <Table.Row>
            <Table.HeaderCell>Food</Table.HeaderCell>
            <Table.HeaderCell>Calories</Table.HeaderCell>
            <Table.HeaderCell>Protein</Table.HeaderCell>
            <Table.HeaderCell>Done</Table.HeaderCell>
         </Table.Row>
      </Table.Header>

      <Table.Body>
         <Table.Row>
            <Table.Cell>Apples</Table.Cell>
            <Table.Cell>200</Table.Cell>
            <Table.Cell>0g</Table.Cell>
            <Table.Cell collapsing>
               <Checkbox slider />
            </Table.Cell>
         </Table.Row>
         <Table.Row>
            <Table.Cell>Orange</Table.Cell>
            <Table.Cell>310</Table.Cell>
            <Table.Cell>0g</Table.Cell>
            <Table.Cell collapsing>
               <Checkbox slider />
            </Table.Cell>
         </Table.Row>
      </Table.Body>
      <Table.Footer fullWidth>
         <Table.Row>
            <Table.HeaderCell colSpan="4">
               <Button floated="right" icon labelPosition="left" size="small">
                  <Icon name="user" /> Add User
               </Button>
            </Table.HeaderCell>
         </Table.Row>
      </Table.Footer>
   </Table>
);

export default FoodTable;
