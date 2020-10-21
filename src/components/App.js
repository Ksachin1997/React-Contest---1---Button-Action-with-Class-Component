import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      para: ""
    };

    this.handleClick = () => {
      this.setState({
        para: (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )
      });
    };
  }

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleClick}>
          Click
        </button>
        {this.state.para}
      </div>
    );
  }
}

export default App;
