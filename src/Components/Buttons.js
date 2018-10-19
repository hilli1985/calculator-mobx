import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import Button from "./Button";
import Actions from "./Actions";
import Numbers from "./Numbers";

@inject("store")
@observer
class Buttons extends Component {
    render() {
      return (
      <div className='buttons-container'>
      <div className='special-buttons'>
      <Button className='button' tag='C' onClick={this.props.store.clearCurrentOperand}/>
      <Button className='button' tag='+/-' onClick={this.props.store.changeSign}/>
      <Button className='button' tag='%' onClick={this.props.store.precentage}/>
      </div>
      <Numbers/>
      <Actions/>
      <div className='special-buttons-down'>
      <Button className='button button-zero' tag='0'  onClick={this.props.store.updateCurrentOperand}/>
      <Button className='button' tag='.' onClick={this.props.store.adddecimalPoint}/> 
      </div>
     
     


      </div>);
    }
  }
  export default Buttons;