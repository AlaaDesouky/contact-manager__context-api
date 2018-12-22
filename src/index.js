import React, { Component } from "react";
import ReactDOM from "react-dom";

import Contacts from "./components/Contacts";
import Header from "./components/Header";
import { Provider } from "./context";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
