import React from "react";
import ReactDOM from "react-dom";

import Contact from "./components/Contact";
import Header from "./components/Header";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="John Doe"
            email="jdoe@gmail.com"
            phone="555-555-5555"
          />
          <Contact
            name="Karen Smith"
            email="karen@gmail.com"
            phone="444-444-4444"
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
