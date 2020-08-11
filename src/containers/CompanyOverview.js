import React, { Component } from "react";
import "./company-over-view.css";

class CompanyOverview extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
  }
  changeText() {
    this.state.isShow
      ? this.setState({ isShow: false })
      : this.setState({ isShow: true });
  }
  render() {
    return (
      <div>
        <div className="app-container">
          <div className="back">
            <div className="overview">
              <h2>{this.props.overview && this.props.overview.name}</h2>
            </div>
            {this.state.isShow ? (
              <div className="text ">
                {this.props.overview && this.props.overview.text}
              </div>
            ) : (
              <div className="text is-text">
                {this.props.overview && this.props.overview.text}
                </div>
            )}
            {this.state.isShow ? (
              <p onClick={() => this.changeText()}><span className="less">Show less</span></p>
            ) : (
              <p onClick={() => this.changeText()}><span className="more">Show more</span></p>
            )}
          </div>
        </div>
      </div>
      
    );
  }
}

export default CompanyOverview;
