import React, { Component } from 'react';
import BarChart from './Barchart';
export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('/data')
                  .then((response) => response.json())
                  .then((responseJson) => {
                      this.setState({ data: responseJson }) ;
                  })
                .catch((error) => {
                    console.error(error);
                })
    }

    render() {
       return (
           <div>
            <h1>Hello React!</h1>
            <BarChart  data={this.state.data} />
        </div>
       )
    };
}
