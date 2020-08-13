import React, { Component } from "react";
import "./term-and-condition.css";
import TermCard from './TermCard';

class TermsAndCondition extends Component {
  render() {
    return (
      <div>
        <div className="app-container">
          <div className="term-policy-baggage-card">
            <div className="container">
              <div className="term-condition">
                <h3 className="term-header">
                  {this.props.terms_and_conditions &&
                    this.props.terms_and_conditions.name}
                </h3>
              {/* <span className="description-title">
              {this.props.terms_and_conditions &&
                this.props.terms_and_conditions.description}
            </span> */}
              <span className="description-title">
                <ol>
                {this.props.terms_and_conditions &&
                  this.props.terms_and_conditions.description.map((item, index) => (
                    <TermCard item={item} key={index} />
                  ))}
                  </ol>
              </span>
              </div>
              <div className="policy">
                <h3 className="policy-header">{this.props.policy && this.props.policy.name}
                </h3>
                <p className="policy-description">
                {this.props.policy && this.props.policy.description}
                </p>
              </div>
              <div className="baggage-and-fees">
                <h3 className="baggage-header">
                  {this.props.baggage_and_fees &&
                    this.props.baggage_and_fees.name}
                </h3>
                <p className="baggage-description">
                {this.props.baggage_and_fees &&
                  this.props.baggage_and_fees.description}
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TermsAndCondition;
