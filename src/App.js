import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = { tick: new Date().toLocaleTimeString() }
    }
    tickClock(e) {
        this.setState({ tick: new Date().toLocaleTimeString() })
    }
    render() {
        return <Clock tick={this.state.tick} />
    }
    componentDidMount() {
        setInterval(
            () => this.tickClock(),
            1000
        );
    }
}


class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>It is {this.props.tick}.</h2>
            </div>
        )
    }
}

export default App;