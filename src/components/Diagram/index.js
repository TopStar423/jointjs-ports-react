import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as joint from 'jointjs';
import './style.scss';

export default class Diagram extends Component {
    constructor(props) {
        super(props);
        this.graph = new joint.dia.Graph();
        this.cell = null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { inPorts, outPorts } = this.props;

        if (inPorts && inPorts !== prevProps.inPorts) {
            this.cell.set('inPorts', inPorts);
        }

        if (outPorts && outPorts !== prevProps.outPorts) {
            this.cell.set('outPorts', outPorts);
        }
    }

    componentDidMount() {
        new joint.dia.Paper({
            el: ReactDOM.findDOMNode(this.refs.placeholder),
            width: 1200,
            height: 600,
            model: this.graph
        });

        this.cell = new joint.shapes.devs.Model({
            position: { x: 360, y: 360 },
            size: { width: 180, height: 180 },
            inPorts: [],
            outPorts: [],
            ports: {
                groups: {
                    'in': {
                        attrs: {
                            '.port-body': {
                                fill: '#16A085'
                            }
                        }
                    },
                    'out': {
                        attrs: {
                            '.port-body': {
                                fill: '#E74C3C'
                            }
                        }
                    }
                }
            },
            attrs: {
                '.label': { text: 'Model', 'ref-x': .5, 'ref-y': .2 },
                rect: { fill: '#2ECC71' }
            }
        });

        this.graph.addCells([this.cell]);
    }

    render() {
        return (
            <div className="diagram-container">
                <div id="diagram" ref="placeholder" />
            </div>
        )
    }
}