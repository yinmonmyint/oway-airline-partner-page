import React, { Component } from "react";
import "./popular-airline.css"
import Card from "./Card";
import { partner } from "../constants/constant";

class PopularAirline extends Component {
  render() {
    return (
      <div>
          <div className="app-container">
        <div className="popular-airline">
          <h2>Popular Airlines</h2>
          </div>
        <div className="airline-card">
        {partner.map((item) => (
          <Card data={item} key={item.id} />
        ))}
    
      </div>
      </div>
      </div>
      
    );
  }
}
export default PopularAirline;
