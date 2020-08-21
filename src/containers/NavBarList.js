import React, { Component } from "react";
import "./nav-bar-list.css";

class NavBarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOverview: true,
      isFaq: false,
      isPromotion: false,
      isDestination: false,
    };
  }
  changeFaq() {
    this.setState({
      isOverview: false,
      isFaq: true,
      isPromotion: false,
      isDestination: false,
    });
  }
  changePromotion() {
    this.setState({
      isOverview: false,
      isFaq: false,
      isPromotion: true,
      isDestination: false,
    });
  }
  changeDestination() {
    this.setState({
      isOverview: false,
      isFaq: false,
      isPromotion: false,
      isDestination: true,
    });
  }
  changeOverview() {
    this.setState({
      isOverview: true,
      isFaq: false,
      isPromotion: false,
      isDestination: false,
    });
  }
  render() {
    return (
      <div className="reactcomp-anchor-nav">
        <div className="nav-bar-box">
          <nav
            className={
              this.state.isFaq ||
              this.state.isPromotion ||
              this.state.isDestination
                ? "nav-bar-wrapper isfixed"
                : "nav-bar-wrapper"
            }
          >
            <ul className="nav-bar-list">
              <li
                className={
                  this.state.isOverview ? "nav-bar-li active" : "nav-bar-li"
                }
                onClick={() => {
                  this.changeOverview();
                }}
              >
                <a href="#overview" className="nav-bar-href">
                  <div className="nav-bar-gap-wrapper">
                    <span className="nav-text">Overview</span>
                  </div>
                </a>
              </li>
              <li
                className={
                  this.state.isFaq ? "nav-bar-li active" : "nav-bar-li"
                }
                onClick={() => {
                  this.changeFaq();
                }}
              >
                <a href="#faq" className="nav-bar-href">
                  <div className="nav-bar-gap-wrapper">
                    <span className="nav-text">FAQ</span>
                  </div>
                </a>
              </li>
              <li
                className={
                  this.state.isPromotion ? "nav-bar-li active" : "nav-bar-li"
                }
                onClick={() => {
                  this.changePromotion();
                }}
              >
                <a href="#promotion" className="nav-bar-href">
                  <div className="nav-bar-gap-wrapper">
                    <span className="nav-text">Promotion</span>
                  </div>
                </a>
              </li>
              <li
                className={
                  this.state.isDestination ? "nav-bar-li active" : "nav-bar-li"
                }
                onClick={() => {
                  this.changeDestination();
                }}
              >
                <a href="#destination" className="nav-bar-href">
                  <div className="nav-bar-gap-wrapper">
                    <span className="nav-text">Popular Destination</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default NavBarList;
