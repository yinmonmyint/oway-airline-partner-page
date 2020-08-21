import React, { Component } from "react";
import "./title.css";

class Title extends Component {
  render() {
    return (
      <div className="partner-title">
        <h1>{this.props.name && this.props.name}</h1>
      </div>
    );
  }
}
export default Title;
