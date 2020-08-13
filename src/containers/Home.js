import React, { Component } from "react";
import "./home.css";
import PopularAirline from "./PopularAirline";

class Home extends Component {
  render() {
    return (
      <div>
        <PopularAirline/>
      </div>
    );
  }
}

export default Home;