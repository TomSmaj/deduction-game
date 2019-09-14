import React, { Component } from "react";
import $ from "jquery";
import sampledata from '../../data-sample'

class PlayerPage extends Component {
  state = {

  };

  componentDidMount() {
    console.log("player page mounted");
    console.log(sampledata);
  }

  render() {
    return (
      <div>
        Player Page
      </div>
    );
  }
}

export default PlayerPage;