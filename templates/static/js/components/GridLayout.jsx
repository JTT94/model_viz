import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import BarChart from "./BarChart";
const ReactGridLayout = WidthProvider(RGL);

class BasicLayout extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
	    layout: this.generateLayout(),
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

  generateDOM() {
    return _.map(_.range(this.props.items), function(i) {
      switch(i) {
          case 0:
            // code block
              return(
                  <div key={i}>
                      <BarChart  data={[1,2,3]} id = {'bar'}/>
                  </div>
              )
            break;

          default:
            // code block
              return (
              <div key={i}>
                  <span className="text">{i}</span>
              </div>
              )
        }
    });
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function(item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString()
      };
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

export default BasicLayout;
