import React, { Component } from "react";
import "./popular-route.css";
import RouteCard from "./RouteCard";

class PopularRoute extends Component {
  render() {
    return (
      <div>
        <div className="route-title">
          <h2>
            {this.props.popular_routes && this.props.popular_routes.title}
          </h2>
        </div>
        <div className="app-container">
        <div className="background">
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
