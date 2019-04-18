import React from 'react';
import Plot from 'react-plotly.js';

class PlotlyBarChart extends React.Component {
    constructor(props) {
    super(props)

  }

  render() {
    return (
      <Plot
        data={this.props.data}
        layout={ {width: 500, height: 800, title: 'A Fancy Plot'} }
      />
    );
  }
}

export default PlotlyBarChart;