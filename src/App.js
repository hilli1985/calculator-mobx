import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable, action, autorun, reaction } from "mobx";
import "./App.css";
import Calculator from "./Components/Calculator";


@inject("store")
@observer
class App extends Component {

  // @action
  // inputChange = e => {
  //   // this.iceCream[e.target.name] = e.target.value;
  //   // console.log(e.target.value);
  //   // this.props.store.filterValue = e.target.value;
  // };

  
  render() {
    return (
      <div className="App">
      <h1 className="App-title">My Calculator</h1>
      <div>
        <div><Calculator/></div>
      </div>
      </div>
      );
    }
  }
  
  export default App;
  