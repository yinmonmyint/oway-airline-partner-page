import React, { Component } from "react";
import "./city-card.css";

class CityCard extends Component {
  render() {
    const mystyle = {
      backgroundImage:
        "url(" + require(`../assets/images/${this.props.item.img_url}`) + ")",
    };
    return (
        <div className="city-card">
          <div className="city-image" style={mystyle}></div>
          <div className="title-city">{this.props.item.name}</div>
        </div>
    );
  }
}
export default CityCard;
