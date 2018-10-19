import React, { Component } from "react";
import Button from "./Button";
import { observer, inject } from "mobx-react";
import { observable, action, autorun, reaction } from "mobx";

@inject("store")
@observer
class Numbers extends Component {
    @observable
    render() {
      return (<div className='numbers-container'>
        <Button className='button' tag='7' onClick={this.props.store.updateCurrentOperand}/>
        <Button className='button' tag='8' onClick={this.props.store.updateCurrentOperand}/>
        <Button className='button' tag='9' onClick={this.props.store.updateCurrentOperand}/>
        
        <Button className='button' tag='4' onClick={this.props.store.updateCurrentOperand}/>
        <Button className='button' tag='5' onClick={this.props.store.updateCurrentOperand}/>
        <Button className='button' tag='6' onClick={this.props.store.updateCurrentOperand}/>
        
        <Button className='button' tag='1' onClick={this.props.store.updateCurrentOperand}/>
        <Button className='button' tag='2' onClick={this.props.store.updateCurrentOperand}/>
        <Button className='button' tag='3' onClick={this.props.store.updateCurrentOperand}/>
      </div>);
    }
  }
  export default Numbers;