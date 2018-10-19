import React, { Component } from "react";
import { observable , action , computed , autorun } from "mobx";


class Button extends Component {
    clickHandle = ()=>{
        this.props.onClick(this.props.tag);
    }
    render() {
      return (
      <div className={this.props.className} onClick={this.clickHandle}>{this.props.tag}
      </div>);
    }
  }
  export default Button;