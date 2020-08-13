import React, { Component } from "react";
import "./popular-route.css";
import RouteCard from "./RouteCard";

class PopularRoute extends Component {
  render() {
    return (
      <div className="pop-route-bg">
        <div className="app-container">
        <div className="route-title">
            {this.props.popular_routes && this.props.popular_routes.title}
        </div>
        <div className="route-card">
        {this.props.popular_routes && this.props.popular_routes.route.map((item,index) => (
            <RouteCard item={item} key={index} />
          ))}
      </div>
      </div>
    </div>
    );
  }
}
export default PopularRoute;
