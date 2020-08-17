import React, { Component } from "react";
import "./popular-airline.css";
import Card from "./Card";
import { partner } from "../constants/constant";

class PopularAirline extends Component {
  render() {
    return (
      <div>
        <div className="popular-airline-body">
          <div className="app-container">
            <div className="popular-airline-block">
              <div className="title-airline">
                <h2 className="header">
                  <span>Popular Airlines</span>
                  <small>for your best travel experience</small>
                </h2>
              </div>
              <div className="international-card">
                <h3><span>{partner[0].international.title}</span></h3>
                <span>
                  {partner[0].international.airline.map((item) => (
                    <Card data={item} key={item.id} />
                  ))}
                </span>
              </div>
              <div className="domestic-card">
                <h3>{partner[0].domestic.title}</h3>
                <span>
                  {partner[0].domestic.airline.map((item) => (
                    <Card data={item} key={item.id} />
                  ))}
                </span>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PopularAirline;
