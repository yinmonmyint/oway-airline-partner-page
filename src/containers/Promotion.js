import React, { Component } from "react";
import "./promotion.css";
import PromotionCard from "./PromotionCard";

class Promotion extends Component {
  constructor(props) {
    super(props);
    this.state = { oneway: true };
  }
  changeRoundTrip() {
    this.setState({
      oneway: false,
    });
  }
  changeOneWay() {
    this.setState({
      oneway: true,
    });
  }
  render() {
    return (
      <div>
         <div className="app-container">
          <div className="promo">
            <h2>{this.props.promotion && this.props.promotion.name}</h2>
            </div>
            <div className="title">
            <span className={this.state.oneway ? 'active':'oneway'} onClick={() => this.changeOneWay()}>
              {this.props.promotion && this.props.promotion.one_way.name}
            </span>
            &nbsp;|&nbsp;
            <span className={!this.state.oneway? 'active': 'round-trip'} onClick={() => this.changeRoundTrip()}>
              {this.props.promotion && this.props.promotion.round_trip.name}
            </span>
            </div>
            {this.state.oneway ? (
              <div className="promotion-card">
                {this.props.promotion &&
                  this.props.promotion.one_way.route.map((item, index) => (
                    <PromotionCard item={item} key={index} />
                  ))}
              </div>
            ) : (
              <div className="promotion-card">
                {this.props.promotion &&
                  this.props.promotion.round_trip.route.map((item, index) => (
                    <PromotionCard item={item} key={index} />
                  ))}
              </div>
            )}
        </div>
      </div>
    );
  }
}
export default Promotion;
