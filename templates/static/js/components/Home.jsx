import React, { Component } from 'react';
import BarChart from './Barchart';
export default class Home extends Component {
    constructor(props) {
    super(props)

    this.state = {
      data:  [12, 5, 6, 6, 9, 10]
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
