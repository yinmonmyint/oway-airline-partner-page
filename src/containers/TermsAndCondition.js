import React, { Component } from "react";
import "./term-and-condition.css";
class TermsAndCondition extends Component {
  render() {
    return (
      <div>
        <div className="app-container">
          <div className="term">
            <h3>
              {this.props.terms_and_conditions &&
                this.props.terms_and_conditions.name}
            </h3>
            <hr />
            {this.props.terms_and_conditions && this.props.terms_and_conditions.description}
          </div>
          
        </div>
      </div>
    );
  }
}
export default TermsAndCondition;
