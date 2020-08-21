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
      <div id="overview">
      <div className="overview block">
        <div className="company-overview">
          <div className="app-container">
            <div className="overview">
              {this.props.overview && this.props.overview.name}
            </div>
            {this.state.isShow ? (
              <div className="text ">
                {this.props.overview && this.props.overview.text}
              </div>
            ) : (
              <div className="is-text">
                {this.props.overview && this.props.overview.text}
              </div>
            )}
            <div className="more-less">
              {this.state.isShow ? (
                <p onClick={() => this.changeText()}>
                  <span className="less">
                    <i className="less-arrow"></i>Show less
                  </span>
                </p>
              ) : (
                <p onClick={() => this.changeText()}>
                  <span className="more">
                    <i className="more-arrow"></i>Show more
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
        </div>
        </div>
    );
  }
}

export default CompanyOverview;
