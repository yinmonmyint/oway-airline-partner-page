import React, { Component } from "react";
import "./frequently-asked-question.css";
import QuestionAndAnswer from "./QuestionAndAnswer";

class FrequentlyAskedQuestion extends Component {
  render() {
    return (
      <div className="faq block">
        <div className="app-container">
            <div className="faq-title">
              {this.props.faq && this.props.faq.name}
            </div>
            <div className="askquestion">
              <ul>
                {this.props.faq &&
                  this.props.faq.qa.map((item, index) => (
                    <QuestionAndAnswer item={item} key={index} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
    );
  }
}
export default FrequentlyAskedQuestion;
