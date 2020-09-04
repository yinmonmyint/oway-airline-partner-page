import React, { Component } from "react";
import "./company-over-view.css";
// import { Button } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';
import {CaretDownOutlined } from '@ant-design/icons';

class CompanyOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      height: 100,
      moreHeight: 0,
    };
  }
  changeText = () => this.setState({ isShow: !this.state.isShow });
  componentDidMount() {
    setTimeout(() => {
      const moreheight = document.getElementById("txtId").clientHeight;
      this.setState({ moreHeight: moreheight });
    }, 100);
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
              <div
                className="text"
                style={{
                  height: this.state.isShow
                    ? this.state.moreHeight
                    : this.state.height,
                }}
              >
                <p
                  id="txtId"
                  dangerouslySetInnerHTML={{
                    __html: this.props.overview && this.props.overview.text,
                  }}
                ></p>
              </div>
              <div className="more-less" >
                {this.state.moreHeight > this.state.height && (
                  <p className="more-or-less" onClick={() => this.changeText()}>
                    {this.state.isShow ? <CaretUpOutlined style={{color:'blue', paddingRight:15}}/> : <CaretDownOutlined style={{color:'blue' , paddingRight:15}}/>}
                    {this.state.isShow ? "Show Less" : "Show More"}
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
