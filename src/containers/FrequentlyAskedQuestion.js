import React, { Component } from "react";
import "./frequently-asked-question.css";
import QuestionAndAnswer from "./QuestionAndAnswer";

class FrequentlyAskedQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
    };
  }
  render() {
    return (
      <div id="faq">
        <div className="faq block">
          <div className="app-container">
            <div className="faq-title">
              {this.props.faq && this.props.faq.name}
            </div>
            <div className="askquestion">
              <ul>
                {this.props.faq &&
                  this.props.faq.qa.map((item, index) => (
                    <QuestionAndAnswer
                      item={item}
                      key={index}
                      name={index}
                      call={(name) => this.setState({ currentValue: name })}
                      currentValue={this.state.currentValue}
                      height={this.state.height}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FrequentlyAskedQuestion;
