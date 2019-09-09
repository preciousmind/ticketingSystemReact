import React from "react";
import { slide as Menu } from "react-burger-menu";

import "./styles.scss";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/home">
        Home
      </a>

      <a className="menu-item" href="/dashboard">
        Dashboard
      </a>

      <a className="menu-item" href="/counterwidget">
        Counter Widget
      </a>
    </Menu>
  );
};
