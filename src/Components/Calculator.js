import React, { Component } from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";
import { observer, inject } from "mobx-react";
import { observable, action, autorun, reaction } from "mobx";


@inject("store")
@observer
class Calculator extends Component {
    render() {
      return (
      <div className='container'>
        <div className='calc-container'>
        <Screen/>
        <Buttons/>
        </div>
      </div>);
    }
  }
  export default Calculator;