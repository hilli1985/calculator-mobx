import React, { Component } from "react";
import { observer, inject } from "mobx-react"; 
import Button from "./Button";

@inject("store")
@observer
class Actions extends Component {
    render() {
        return (<div className='actions-container'>
        <Button className='button button-operator' tag='/' onClick={this.props.store.updateOpertor}/>
        <Button className='button button-operator' tag='X' onClick={this.props.store.updateOpertor}/>
        <Button className='button button-operator' tag='-' onClick={this.props.store.updateOpertor}/>
        <Button className='button button-operator' tag='+' onClick={this.props.store.updateOpertor}/>
        <Button className='button button-operator button-round' tag='=' onClick={this.props.store.updateOpertor}/> 
        </div>);
    }
}
export default Actions;