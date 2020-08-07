import React, { Component } from "react";
import "./promotion-card.css";

class PromotionCard extends Component {
  render() {
    return (
      <div>
        <div className="promo-card">
          <div className="promo-title">
            {this.props.item.title}
          </div>
           <div className="from-to">
            {this.props.item.from}-{this.props.item.to}
          </div>
          <div className="date">
          {this.props.item.date}: {this.props.item.fromDate} to {this.props.item.toDate}
          </div>
        </div>
      </div>
    );
  }
}
export default PromotionCard;
