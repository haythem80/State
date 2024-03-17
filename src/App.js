import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
    isShow: true,
  };
  handleClickPlus = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleClickMinus = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };

  handleClickShow = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  componentDidMount(){
    console.log("componentDidMount")
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")

  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }

  render() {
    console.log("render")

    return (
      <div className="App">
        <button onClick={this.handleClickShow}>Show</button>
        {
          this.state.isShow&&
          <div>
          <h1>{this.state.count}</h1>
          <button className="block" onClick={this.handleClickPlus}>
          +
          </button>
          <button className="block" onClick={this.handleClickMinus}>
          -
          </button>
          </div>
         
        }
      </div>
    );
  }
}
