import React, { Component } from "react";
import "./card.css";
import { Link } from "react-router-dom";
class Card extends Component {
  render() {
    return (
      <Link
        to={`/partner/${this.props.data.link}`}
        className="aircard"
      >
          <img
            src={require(`../assets/images/${this.props.data.img_url}`)}
            width="40px"
            height="40px"
          />
       </Link>
    );
  }
}
export default Card;
