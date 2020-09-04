import React, { Component } from "react";
import "./city-card.css";
import { Card } from "antd";

class CityCard extends Component {
  render() {
    const { Meta } = Card;
    // const mystyle = {
    //   backgroundImage:
    //     "url(" + require(`../assets/images/${this.props.item.img_url}`) + ")",
    // };
    return (
      // <div className="city-card">
      //   <div className="city-image" style={mystyle}></div>
      //   <div className="title-city">{this.props.item.name}</div>
      // </div>
      <div >
        <Card
        className="city-card"
          cover={
            <img
              alt="example"
              src={require(`../assets/images/${this.props.item.img_url}`)}
              width="100%"
              height="300"
            />            
          }
        >
         
          <Meta title={this.props.item.name} className="title-city" />
        </Card>
      </div>
    );
  }
}
export default CityCard;
