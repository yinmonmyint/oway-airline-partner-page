import React, { Component } from "react";
import "./route-card.css";

class RouteCard extends Component {
  render() {
    return (
        <div className="routecard">
          {this.props.item.from}
          <span className="route-icon"></span>
          {this.props.item.to}
        </div>
    );
  }
}
export default RouteCard;
