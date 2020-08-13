import React, { Component } from "react";
import "./promotion-card.css";

class PromotionCard extends Component {
  render() {
    return (
      <div>
        <div className="promo-card">
          <div className="from-to">
            <span>{this.props.item.from}</span>-
            <span>{this.props.item.to}</span>
          </div>          
          <div className="date">
            {this.props.item.date}: {this.props.item.fromDate} to
            {this.props.item.toDate}
          </div>
          <div className="discount">
            <span className="dis-title">{this.props.item.discount} :</span>
            <span className="promo-title">{this.props.item.title}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default PromotionCard;
