import React, { Component } from 'react';

class Button extends Component {
  handleClick() {
    console.log('#######clicked');
  }

  render() {
    return(
      <div onClick={()=>this.handleClick()}>click me</div>
    )
  }
}

export default Button;