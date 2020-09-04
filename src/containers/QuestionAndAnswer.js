import React, { Component } from "react";
import "./ques-and-ans.css";
import { Collapse } from "antd";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

class QuestionAndAnswer extends Component {
  render() {
    return (
      <li>
        {/* className={
          this.props.currentValue == this.props.name ? "isactive" : "notactive"
        }
        onClick={() => this.props.call(this.props.name)}
      >
        <div className="ans-card">
          <div className="question">
            <i className="arrow-down"></i>
            {this.props.item.question} <i className="arrow-right"></i>
          </div>
          <div className="answer">{this.props.item.answer}</div>
        </div>  */}
        <Collapse
          onChange={callback}
          expandIconPosition="right"
          className="ques-and-ans-collapse"
          defaultActiveKey="1"
        >
          <Panel header={this.props.item.question}>
            <p>{this.props.item.answer}</p>
          </Panel>
        </Collapse>
      </li>
    );
  }
}

export default QuestionAndAnswer;
