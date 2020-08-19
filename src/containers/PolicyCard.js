import React, { Component } from 'react'

class PolicyCard extends Component {
    render() {
        return (
            <div>
                <li>{this.props.item.text}</li>
            </div>
        )
    }
}
export default PolicyCard;