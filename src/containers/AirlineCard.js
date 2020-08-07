import React, { Component } from "react";
import "./airline-card.css";

class AirlineCard extends Component {
  render() {
    return (
      <div>
        <div className="airline-card">
          <div className="airline-logo"><img src={require(`../assets/images/${this.props.item.img_url}`)} width="80%" height="80%"/></div>
          <div className="airline-name">{this.props.item.name}</div>
        </div>
      </div>
    );
  }
}
export default AirlineCard;
