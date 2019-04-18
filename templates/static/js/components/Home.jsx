import React, { Component } from 'react';
import BarChart from './Barchart';
import PlotlyBarChart from './PlotlyBarchart';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            plotlydata : []
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
                }),
        fetch('/plotlybar')
                  .then((response) => response.json())
                  .then((responseJson) => {
                      this.setState({ plotlydata: responseJson }) ;
                  })
                .catch((error) => {
                    console.error(error);
                })
    }

    render() {
       return (
           <div>
            <h1>Hello React!</h1>
            <BarChart  data={this.state.data} id = 'bar'/>
            <PlotlyBarChart  data={this.state.plotlydata} />
            </div>
       )
    };
}
