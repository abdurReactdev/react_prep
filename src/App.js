import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Userform } from "./Components/userForm";

class App extends React.Component {
  state = {
    name: "",
    age: "",
    des: "",
  };
  changelistener = (e) => {
    this.setState({ [e.name]: e.value });
  };
  render() {
    return (
      <div className="container">
        <h2>Name: {this.state.name}</h2>
        <h2>Age: {this.state.age}</h2>
        <h2>Designation: {this.state.des}</h2>
        <Userform pros={this.state} changelistener={this.changelistener} />
      </div>
    );
  }
}

export default App;
