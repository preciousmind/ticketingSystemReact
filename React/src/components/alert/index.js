import React, { Component } from "react";
import "./styles.scss";

class SnackBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  myFunction = () => {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 3000);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.myFunction()}>Show Snackbar</button>
        <div id="snackbar">Some text some message.. <span>close</span></div>
      </div>
    );
  }
}

export default SnackBar;
