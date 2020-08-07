import React, { Component } from "react";
import "./frequently-asked-question.css";
import QuestionAndAnswer from "./QuestionAndAnswer";

class FrequentlyAskedQuestion extends Component {
  render() {
    return (
      <div>
        <div className="faq">
          <div className="faq-title">
            <h2>{this.props.faq && this.props.faq.name}</h2>
          </div>
          <div className="askquestion">
            {this.props.faq &&
              this.props.faq.qa.map((item, index) => (
                <QuestionAndAnswer item={item} key={index} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}
export default FrequentlyAskedQuestion;
