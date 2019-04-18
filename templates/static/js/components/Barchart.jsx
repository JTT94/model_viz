import React, { Component } from 'react';
import * as d3 from "d3";
class BarChart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate() {
      this.drawChart()
   }

  drawChart() {
    const data = this.props.data;
    const w = 700;
    const h = 300;
    const id = "#" + this.props.id;

    d3.selectAll(id).select('svg')
      .remove();

    const svg = d3.select(id)
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("margin-left", 100);

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")
  };

  render(){
    return <div id={this.props.id}></div>
  }
}

export default BarChart;