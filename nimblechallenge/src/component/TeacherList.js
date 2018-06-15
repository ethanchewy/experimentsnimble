import React, { Component } from 'react';
import logo from './logo.svg';
import Name from './Name';
import Status from './Status';
import DateName from './DateName';
import LastAction from './LastAction';
import Location from './Location';
import GoTo from './GoTo';
import './Status.css';
import './Name.css';
import './TeacherList.css';
import './DateName.css';
import './LastAction.css';
import './Location.css';
import './GoTo.css';
import data from './data.json';

class TeacherList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }
    list(value) {
        let rows = [];
        console.log("sdf");
        // const children = (applications) => {
        //     console.log(applications);
        //   if (applications) {
        //     return <ul>{ this.list(applications) }</ul>
        //   }
        // }
        console.log("sdf2");
        value.map((node, index) => {
            console.log(node.applications.length);
            let originalValue = node;
            for(let i = 0; i < node.applications.length; i ++) {
                rows.push(
                    <tr key={ node.id } name={ node.name } >
                        <Name value={node} />
                        {/* FIX STATUS TO GET ID TO LOCATE SPECIFIC NODE */}
                        <Status value = {node} index={i} />
                        <DateName value = {node} index={i} />
                        <LastAction value = {node} index={i} />
                        <Location value = {node} />
                        <GoTo id = {node.id} />
                    </tr>
                )
            }
        });

        return (
            <tbody>
                <tr>
                    <th>Applicant</th>
                    <th>Status</th>
                    <th>Application Date</th>
                    <th>Last Action</th>
                    <th>Location</th>
                    <th>Go To Profile</th>
                </tr>
                {rows}
            </tbody>
        );

        // return value.map((node, index) => {
        //     let currentTeacher = node.applications;
        //     // console.log(currentTeacher);
        //     return currentTeacher.map((node, index) => { 
        //         console.log(node);
        //         return 
        //         (
        //             <tr key={ node.id } name={ node.name }>
        //                 <Status value={node} />
        //                 <td></td>
        //                 <td></td>
        //                 <td></td>
        //                 <td></td>
        //             </tr>
        //         )
        //     });
        // });
    }
    render () {
        
        return (
            <table>
                {this.list(this.state.data)} 
                {/* <tbody>
                    <tr>
                        <th>Applicant</th>
                        <th>Status</th>
                        <th>Application Date</th>
                        <th>Last Action</th>
                        <th>Location</th>
                        <th>Go To Profile</th>
                    </tr>
                    {this.list(this.state.data)}    
                </tbody> */}
            </table>
        );
    }
}

export default TeacherList;