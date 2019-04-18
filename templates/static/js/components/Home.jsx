import React, { Component } from 'react';
import BarChart from './Barchart';
export default class Home extends Component {

    render() {
       return (
           <div className="App">
            <h1>Hello React!</h1>

            <BarChart  />
        </div>
       )
    }
}
