import React, { Component } from 'react';
import BarChart from './BarChart';
import PlotlyBarChart from './PlotlyBarchart';
import Draggable from 'react-draggable';
import BasicLayout from './GridLayout';

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
                  <h1>Hello React!</h1>
                  </div>
                </div>
            </Draggable>

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
                  <BarChart  data={this.state.data} id = {'bar'}/>
                  </div>
                </div>
              </Draggable>

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
                  <PlotlyBarChart  data={this.state.plotlydata} />
                  </div>
                </div>
             </Draggable>
            <div>
            <BasicLayout className= "layout" items= {5} rowHeight= {30} onLayoutChange= {function() {}} cols={10} />
            </div>
            </div>
       )
    };
}
