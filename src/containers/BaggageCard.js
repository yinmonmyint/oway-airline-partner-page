import React, { Component } from 'react'

class BaggageCard extends Component {
    render() {
        return (
            <div>
                <li>{this.props.item.text}</li>
            </div>
        )
    }
}
export default BaggageCard;