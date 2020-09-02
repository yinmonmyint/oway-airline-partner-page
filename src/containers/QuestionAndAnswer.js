import React, { Component } from "react";
import "./ques-and-ans.css";

class QuestionAndAnswer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // isShows: false,
  //     height: 60,
  //     moreHeight: 0,
  //   };
  // }
  render() {
    return (
      <li
        className={
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
        </div>
      </li>
    );
  }
}

export default QuestionAndAnswer;
