import React, { Component } from "react";
import "./popular-route.css";
import RouteCard from "./RouteCard";

class PopularRoute extends Component {
  render() {
    return (
      <div className="route-block">
      <div className="pop-route-bg">
        <div className="app-container">
          <h2 className="route-title">
            <span>
              {this.props.popular_routes && this.props.popular_routes.title}
            </span>
            <small>
              <span>
                {this.props.popular_routes &&
                  this.props.popular_routes.small_title}
              </span>
            </small>
          </h2>
          <div className="route-card">
            {this.props.popular_routes &&
              this.props.popular_routes.route.map((item, index) => (
                <RouteCard item={item} key={index} />
              ))}
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default PopularRoute;
