import React, { Component } from 'react';
import './styles.scss';

export default class InputPorts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inPort: '',
            outPort: ''
        };
    }

    handleInputPort = (type, port) => {
        switch (type) {
            case 'in':
                this.setState({ inPort: port });
                break;
            case 'out':
                this.setState({ outPort: port });
                break;
            default:
                break;
        }
    };

    handleAddPort = type => {
        const { onAddPort } = this.props;
        const { inPort, outPort } = this.state;

        switch (type) {
            case 'in':
                onAddPort('in', inPort);
                this.setState({ inPort: '' });
                break;
            case 'out':
                onAddPort('out', outPort);
                this.setState({ outPort: '' });
                break;
            default:
                break;
        }
    };

    render() {
        const { inPort, outPort } = this.state;

        return (
            <div className="input-fields">
                <div className="in-ports ports-input-container">
                    <label>In Ports</label>
                    <input
                        className="port-input"
                        value={inPort}
                        onChange={e => this.handleInputPort('in', e.target.value)}
                    />
                    <button className="btn-add-port" onClick={() => this.handleAddPort('in')}>
                        Add
                    </button>
                </div>
                <div className="out-ports ports-input-container">
                    <label>Out Ports</label>
                    <input
                        className="port-input"
                        value={outPort}
                        onChange={e => this.handleInputPort('out', e.target.value)}
                    />
                    <button className="btn-add-port" onClick={() => this.handleAddPort('out')}>
                        Add
                    </button>
                </div>
            </div>
        )
    }
}