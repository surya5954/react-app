import { render } from '@testing-library/react';
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = { a: '' };
    }

    update(e) {
        this.setState({
            a: this.a.refs.input.value,
            b: this.refs.b.value
        })
    }
    render() {
        return (
            <div>
                <Input
                    ref={compnent => this.a = compnent}
                    onChange={this.update.bind(this)}
                />{this.state.a}
                <hr />
                <input
                    ref="b"
                    type="text"
                    onChange={this.update.bind(this)}
                />{this.state.b}
            </div>
        )
    }

}

// const Input = (props) => {
//     return <input ref= "input" type="text" onChange={this.props.update} />
// }
class Input extends React.Component {
    render() {
        return (
            <div>
                <input
                    ref="input"
                    type="text"
                    onChange={this.props.update}
                />
            </div>

        )
    }
}
export default App;