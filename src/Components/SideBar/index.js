import React from "react";
import { Icon, Menu } from "semantic-ui-react";

const SideBar = () => (
   <Menu compact icon="labeled" vertical>
      <Menu.Item
         name="gamepad"
         // active={activeItem === "gamepad"}
         // onClick={this.handleItemClick}
      >
         <Icon name="gamepad" />
         Games
      </Menu.Item>

      <Menu.Item
         name="video camera"
         // active={activeItem === "video camera"}
         // onClick={this.handleItemClick}
      >
         <Icon name="video camera" />
         Channels
      </Menu.Item>

      <Menu.Item
         name="video play"
         // active={activeItem === "video play"}
         // onClick={this.handleItemClick}
      >
         <Icon name="video play" />
         Videos
      </Menu.Item>
   </Menu>
);

export default SideBar;
