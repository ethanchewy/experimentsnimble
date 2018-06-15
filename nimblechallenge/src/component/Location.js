import React, { Component } from 'react';
import logo from './logo.svg';
import './Location.css';

class Location extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <td>
                {this.props.value.profile.address_city}
            </td>
        )
    }
}

export default Location;
