import React, { Component } from "react";
import "./promotion.css";
import PromotionCard from "./PromotionCard";

class Promotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isoneway: true,
      isroundtrip: false,
    };
  }
  changeRoundTrip() {
    this.setState({
      isoneway: false,
      isroundtrip: true,
    });
  }
  changeOneWay() {
    this.setState({
      isoneway: true,
      isroundtrip: false,
    });
  }
  render() {
    return (
      <div id="promotion">
        <div className="promotion block">
          <div className="app-container">
            <h2 className="promo">
              {this.props.promotion && this.props.promotion.name}
              <small>
                <span>
                  {this.props.promotion && this.props.promotion.small_title}
                </span>
              </small>
            </h2>
            <div className="title">
              <span
                className={this.state.isoneway ? "active" : "oneway"}
                onClick={() => this.changeOneWay()}
              >
                {this.props.promotion && this.props.promotion.one_way.name}
              </span>
              <span
                className={this.state.isroundtrip ? "active" : "round-trip"}
                onClick={() => this.changeRoundTrip()}
              >
                {this.props.promotion && this.props.promotion.round_trip.name}
              </span>
            </div>
            {this.state.isoneway ? (
              <div className="promotion-card">
                {this.props.promotion &&
                  this.props.promotion.one_way.route.map((item, index) => (
                    <PromotionCard
                      item={item}
                      key={index}
                      isroundtrip={this.state.isroundtrip}
                    />
                  ))}
              </div>
            ) : (
              <div className="promotion-card">
                {this.props.promotion &&
                  this.props.promotion.round_trip.route.map((item, index) => (
                    <PromotionCard
                      item={item}
                      key={index}
                      isroundtrip={this.state.isroundtrip}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Promotion;
