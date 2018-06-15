import React, { Component } from 'react';
import logo from './logo.svg';
import 'font-awesome/css/font-awesome.min.css'; 
import './GoTo.css';

class GoTo extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <td>
                <a id={this.props.id} href="#"><i className="fa fa fa-arrow-right"></i></a>
            </td>
        )
    }
}

export default GoTo;