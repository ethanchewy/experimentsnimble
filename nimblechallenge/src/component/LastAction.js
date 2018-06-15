import React, { Component } from 'react';
import logo from './logo.svg';
import './LastAction.css';

//See if there is any difference between created and update

class LastAction extends Component {
    constructor(props) {
        super(props);
    }

    list(value, index) {
        let created = value.applications[index].role.created;
        let updated = value.applications[index].role.updated;

        if (created === updated) {
            return <p>"No Action"</p>;
        } else {
            return <p>"Updated</p>;
        }
        
    }
    render () {
        return (
            <td>
                {this.list(this.props.value, this.props.index)}
            </td>
        )
    }
}

export default LastAction;