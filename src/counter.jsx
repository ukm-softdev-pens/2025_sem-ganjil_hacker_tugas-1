// src/counter.jsx
import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click to Increment
                </button>
                <button onClick={() => this.setState({ count: 0 })}>
                    Reset Counter
                </button>
            </div>
        );
    }
}

export default function CounterNaufal() {
    return (
        <div className="card">
            <Counter />
        </div>
    );
}
