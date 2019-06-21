import React, { Component } from 'react'

export default class OptionItem extends Component {
    render() {
        return (
            <div>
                <li>{this.props.name}</li>
            </div>
        )
    }
}
