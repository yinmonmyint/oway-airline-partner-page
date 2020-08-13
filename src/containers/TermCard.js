import React, { Component } from "react";

class TermCard extends Component {
  render() {
    return (
      <div className="term-card">
        <li>{this.props.item.text}</li>
      </div>
    );
  }
}
export default TermCard;
