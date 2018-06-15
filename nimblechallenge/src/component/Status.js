import React, { Component } from 'react';
import logo from './logo.svg';
// import data from './data.json';
import './Status.css';

class Status extends Component {
    constructor(props) {
        super(props)
        
        // this.state = {
        //   data: data
        // }
    
    }
    list(value, index) {
      return <p>{value.applications[index].status}</p>;

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
    // list(data) {
    //     const children = (items) => {
    //       if (items) {
    //         return <ul>{ this.list(items) }</ul>
    //     }
    //   }
      
    //   return data.map((node, index) => {
    //     return <div key={ node.id } username={ node.username }>
    //       { children(node.applications) }
    //     </div>
    //   })
    // }
    // render () {
    //     return <ul>
    //           { this.list(this.state.data) }
    //       </ul>
    //     const apps = this.state.data;
    //     console.log(apps);
    //     return (
    //         <div>
    //         {data.map(function(teachers, index) { 
    //             return (
    //                 <div id={teachers}>
    //                     <p>{teachers.local.applications.status}</p>
    //                 </div>
    //             )
    //         })}
    //         </div>
    //     )
    // }
    render() {
      return (
          <td>
            {this.list(this.props.value, this.props.index)}
          </td>
      )
    }
}

export default Status;