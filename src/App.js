import React, { Component } from 'react';
import Counter from './components/Counter';
import NameForm from './components/NameForm';
import NameList from './components/NameList';
import UnControlledComponent from './components/base/UnControlledComponent';
import PureContainer from './components/base/PureContainer';
// import Dialog from './components/base/Dialog';
import WrappedDialog from './components/base/WrappedDialog';
import Container from './components/functional/Container';

/**
 * Dialog 컴포넌트 => composition(합성) 즉, 컴포넌트에 다른 컴포넌트 가져다 붙이는 것
 * children을 지원하는 컴포넌트는 합성도 지원한다는것
 * Dialog컴포넌트에 header,body,footer각 요소를 JSX로 넘기는데
 * App.js에서 리렌더링 될 때마다 JSX 문법은 실제로 객체를, 즉 ReactNode객체를 생성한다.
 * 내부적으로 데이터 같아도 비교 연산자로 비교해보면 다름
 * <h2>반가워요!</h2> === <h2>반가워요!</h2> // false
 * 해결책: 겉에 감싸는 purecomponent를 만든다.
 * 
 * 
 */
class App extends Component {
  state = {
    names: ['벨로퍼트', '김민준'],
    value: '',
  }

  onInsert = (name) => {
    this.setState(({names}) => ({ names: names.concat(name) }));
  }

  handleChange = ({target: { value }}) => {
    this.setState({ value })
  }

  render() {
    const { names } = this.state;
    const { onInsert } = this;

    return (
      <div>
        <Counter />
        <hr />
        <h1>이름 목록</h1>
        <NameForm onInsert={onInsert} />
        <NameList names={names} />
        <br/>
        <br/>
        <h1>uncontrolled component</h1>
        <UnControlledComponent />
        <br/>
        <br/>
        <h1>pure component </h1>
        <PureContainer />
        <br/>
        <br/>
        <h1>Dialog</h1>
        <input className="input" value={this.state.value} onChange={this.handleChange} />
        {/* <Dialog
          header={<h3>title</h3>}
          body={<div>body입니다</div>}
          foolter={<div><p>footer입니다</p></div>}
        /> */}
        <WrappedDialog />
        <br/>
        <br/>
        <h1>functional component</h1>
        <Container />
      </div>
    );
  }
}

export default App;