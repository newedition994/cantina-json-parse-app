import React, { Component } from "react";

import NavBar from "./components/NavBar";
import JSONData from "./components/JSON_data";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <JSONData />
      </div>
    );
  }
}

export default App;
