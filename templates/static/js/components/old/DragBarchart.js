import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import BarChart from "./Barchart";

class DragBarchart extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle">
          <BarChart  data={this.props.data} id = {this.props.id}/>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default DragBarchart;