import React, { Component } from "react";
import "./card.css";
import { Link } from "react-router-dom";
class Card extends Component {
  render() {
    return (
      <Link to={`/partner/${this.props.data.link}`} className="aircard">
          <div className="logo">
            <img src={require(`../assets/images/${this.props.data.img_url}`)}/>
          </div>
          <div className="name">
            {this.props.data.name}
            </div>
       </Link>
    );
  }
}
export default Card;