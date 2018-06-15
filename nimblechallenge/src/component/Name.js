import React, { Component } from 'react';
import logo from './logo.svg';
// import data from './data.json';
import './Name.css';

class Name extends Component {
    render () {
        console.log(this.props);
        return (
            <td id={this.props}>
                {this.props.value.name}
                {this.props.value.email}
            </td>
        )
    }
}

export default Name;