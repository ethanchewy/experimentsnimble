import React, { Component } from 'react';
import logo from './logo.svg';
import './DateName.css';

class DateName extends Component {
    constructor(props) {
        super(props);
    }
    list(value, index) {
        let timestamp = value.applications[index].role.created;
        let timeobject = new Date(timestamp);
        // console.log(timeobject.getFullYear());
        //getMonth() starts at 0
        let timestring = timeobject.getMonth() + 1  + "/" + timeobject.getDate()+ "/" + timeobject.getFullYear(); 
        // let timestampCut = timestamp.substring(0, timestamp.length - 17);
        // let timestampCut2 = timestampCut.replace('/r','-');
        // console.log(timestampCut2);
        return <p>{timestring}</p>;
    }
    render () {
        return (
            <td>
                {this.list(this.props.value, this.props.index)}
            </td>
        )
    }
}

export default DateName;