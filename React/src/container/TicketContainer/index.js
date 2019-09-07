import React, { Component } from "react";
import Tickets from "../Tickets";
import "./styles.scss";

class TicketContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Tickets />
      </div>
    );
  }
}

export default TicketContainer;
