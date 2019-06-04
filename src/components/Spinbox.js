import React from "react";

class Spinbox extends React.Component {
  static defaultProps = {};
  state = {
    value: 200,
  }
render() {
  return (
    <div>
    <input 
    type="text" 
    defaultValue={this.state.value}
    onChange={(e) => {
      this.setState({
        value: e.target.value
      })
    }} 
    />
    <button>up</button>
    <button>down</button>
  </div>
  )
}
}



export default Spinbox;