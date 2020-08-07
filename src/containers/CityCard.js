import React, { Component } from "react";
import "./city-card.css";

class CityCard extends Component {
  render() {
    return (
      <div>
        <div className="city-card">
          <div className="city-image">
            <img
              src={require(`../assets/images/${this.props.item.img_url}`)}
              width="100%"
              height="100%"
            />
          </div>
          <div className="title-city">{this.props.item.name}</div>
        </div>
      </div>
    );
  }
}
export default CityCard;
