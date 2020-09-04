import React, { Component } from "react";
import "./nav-bar-list.css";
import { Button } from "antd";
import { Affix } from "antd";


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
        <Affix offsetTop={0} onChange={affixed => console.log(affixed)}>
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
                  <span className="nav-bar-gap-wrapper">
                    <Button type="primary" shape="round">
                      Overview
                    </Button>
                  </span>
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
                  <span className="nav-bar-gap-wrapper">
                    <Button type="primary" shape="round">
                      FAQ
                    </Button>
                  </span>
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
                  <span className="nav-bar-gap-wrapper">
                    <Button type="primary" shape="round">
                      Promotion
                    </Button>
                  </span>
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
                  <span className="nav-bar-gap-wrapper">
                    <Button type="primary" shape="round">
                      Popular destination
                    </Button>
                  </span>
                </a>              
              </li>
            </ul>
          </nav>        
          </Affix>
        </div>
       </div>
    );
  }
}
export default NavBarList;