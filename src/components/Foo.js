import React from 'react';

class Foo extends React.Component {
  componentDidMount() {
    this.props.callback();
  }

  test() {
    return 'foo'
  }

  render(){
    return(
      <div>test</div>
    )
  }
}

export default Foo;