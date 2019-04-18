import React, { Component } from 'react';
import BarChart from './Barchart';
export default class Home extends Component {
    constructor(props) {
    super(props)

    this.state = {
      data:  fetch('/data')
      .then(response => response.json())
    }
  }

    render() {
       return (
           <div className="App">
            <h1>Hello React!</h1>

            <BarChart  data={this.state.data} />
            <BarChart  data={this.state.data} />
        </div>
       )
    }
}
