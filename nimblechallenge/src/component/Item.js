import React, { Component } from 'react';
import logo from './logo.svg';
import data from './data.json';

class Item extends React.Component {
    render() {
      return (
        <td>
            <Name id ={this.props.id} />
        </td>
      )
    }
  }

  export default Item;
  