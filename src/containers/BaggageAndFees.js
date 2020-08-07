import React, { Component } from 'react'
import "./baggage-and-fees.css"

class BaggageAndFees extends Component {
    render() {
        return (
            <div>
                <div className="app-container">
                    <div className="baggage-and-fees">
                    <h3>{this.props.baggage_and_fees && this.props.baggage_and_fees.name}</h3><hr />
                    {this.props.baggage_and_fees && this.props.baggage_and_fees.description}
                    </div>
                </div>
            </div>
        )
    }
}
export default BaggageAndFees;