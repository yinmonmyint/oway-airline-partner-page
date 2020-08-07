import React, { Component } from "react";
import "./ques-and-ans.css";

class QuestionAndAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = { isQuestion: false };
  }
  changeAnswer() {
    this.state.isQuestion
      ? this.setState({ isQuestion: false })
      : this.setState({ isQuestion: true });
  }
  render() {
    return (
      <div>
        <div className="app-container">
          
          <div className="question" onClick={() => this.changeAnswer()}>
          <i className="arrow"> </i>
            {this.props.item.question}
           
          </div>
          {this.state.isQuestion ? (
            <div className="answer">{this.props.item.answer}</div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}
export default QuestionAndAnswer;
