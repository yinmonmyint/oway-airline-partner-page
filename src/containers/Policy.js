import React, { Component } from 'react'
import "./policy.css"

class Policy extends Component {
    render() {
        return (
            <div>
                <div className="app-container">
                <div className="policy">
                <h3>{this.props.policy && this.props.policy.name}</h3>
                <hr />
                {this.props.policy && this.props.policy.description}
                </div>
                </div>
            </div>
        )
    }
}
export default Policy;