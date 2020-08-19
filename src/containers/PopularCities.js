import React, { Component } from "react";
import "./popular-cities.css";
import CityCard from "./CityCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class PopularCities extends Component {
  constructor(props) {
    super(props);
    this.state = { isInternational: true };
  }
  changeDomestic() {
    this.setState({ isInternational: false });
  }
  changeInternational() {
    this.setState({ isInternational: true });
  }
  render() {
    return (
      <div className="city block">
      <div className="app-container">
          <h2 className="city-title">
            <span>
              {this.props.popular_cities && this.props.popular_cities.title}
            </span>
            <small>
              {this.props.popular_cities &&
                this.props.popular_cities.small_title}
            </small>
          </h2>         
          <div className="inter-domes-title">
            <span
              className={
                this.state.isInternational ? "active" : "international"
              }
              onClick={() => this.changeInternational()}
            >
              {this.props.popular_cities &&
                this.props.popular_cities.international.name}
            </span>
            <span
              className={
                !this.state.isInternational ? "active" : "domestic"
              }
              onClick={() => this.changeDomestic()}
            >
              {this.props.popular_cities &&
                this.props.popular_cities.domestic.name}
            </span>
          </div>
          {this.state.isInternational ? (
            <AliceCarousel
              items={
                this.props.popular_cities &&
                this.props.popular_cities.international.cities.map(
                  (item, index) => <CityCard item={item} key={index} />
                )
              }
              responsive={{
                0: {
                  items: 2,
                },
                1024: {
                  items: 6,
                },
              }}
            ></AliceCarousel>
          ) : (
            <AliceCarousel
              items={
                this.props.popular_cities &&
                this.props.popular_cities.domestic.cities.map((item, index) => (
                  <CityCard item={item} key={index} />
                ))
              }
              responsive={{
                0: {
                  items: 6,
                },
                1024: {
                  items: 6,
                },
              }}
            ></AliceCarousel>
          )}
        </div>
        </div>
    );
  }
}
export default PopularCities;
