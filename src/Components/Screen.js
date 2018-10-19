import React, { Component } from "react";
import { observer, inject } from "mobx-react";  

@inject("store")
@observer
class Screen extends Component { 
  render() {
    return (<div className='screen'>
      <div className='screen-string'>{this.props.store.updateDisplayValue}</div>
    </div>);
  }
}
export default Screen;