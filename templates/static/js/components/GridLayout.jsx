import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import BarChart from "./Barchart";
const ReactGridLayout = WidthProvider(RGL);

class BasicLayout extends React.PureComponent {

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateDOM() {
    return _.map(_.range(this.props.items), function(i) {
      switch(i) {
          case 0:
            // code block
              return(
                  <div key={i}>
                     <span>
                    <BarChart  data={[1,2,3,4]} id = 'barplot'/>
                    </span>
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