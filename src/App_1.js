import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      txt: "This is state text",
      count: 0
    }
  }
  update(e) {
    this.setState({ txt: e.target.value })
  }
  render() {
    // return React.createElement('h1', null, "Hello Class");
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
        <Button>I <Hearts/> React</Button>
        <Title text= "this is text validator"/>
      </div>

    )
  }
}

const Button = (props) =>
  <button>{props.children}</button>
//This is a child component 

class Hearts extends React.Component{
  render(){
    return <span>&hearts;</span>
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

const Widget = (props) =>
  <input type="text" onChange={props.update} />
// const App = () => <h1>Hello Funcions</h1>;
App.propTypes = {
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`);
    }
  }
}
App.defaultProps = {

}
export default App;
