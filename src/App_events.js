import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor() {
        super();
        this.state = { currentEvent: "---" };
        this.update = this.update.bind(this);
    }
    update(e) {
        this.setState({ currentEvent: e.type });
    }
    render() {
        //    return <Title text= "Hi I am required"/>
        return (
            <div>
                <textarea
                    onClick={this.update}
                    onKeyPress = {this.update}
                    cols="30"
                    rows="10"
                />
                <h1>{this.state.currentEvent}</h1>
            </div>
        )
    }
}

// const Title = (props) => <h1>Title: {props.text}</h1>


// Title.propTypes = {
//     text: PropTypes.string.isRequired
// }
export default App;