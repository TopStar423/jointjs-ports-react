import React, { Component } from 'react';
import Diagram from './components/Diagram';
import InputPorts from './components/InputPorts';
import 'jointjs/dist/joint.css';
import './App.scss';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inPorts: [],
            outPorts: []
        };
    }

    onAddPort = (type, port) => {
        const { inPorts, outPorts } = this.state;

        switch (type) {
            case 'in':
                this.setState({ inPorts: [...inPorts, port] });
                break;
            case 'out':
                this.setState({ outPorts: [...outPorts, port] });
                break;
            default:
                break;
        }
    };

    render() {
        const { inPorts, outPorts } = this.state;

        return (
            <div className="app">
                <h1 className="app-title">Diagram Ports In/Out</h1>
                <InputPorts onAddPort={this.onAddPort} />
                <Diagram inPorts={inPorts} outPorts={outPorts} />
            </div>
        )
    }
}