import React from 'react';

/**
 * UnContorlledComponent
 *
 * input컴포넌트는 각 상태값을 갖지 않는다.
 * key라는 trick을 사용하여 [인스턴스 제거 -> 인스턴스 생성] 방식
 * (장점)
 * state 캡슐화 방식
 * 성능이 나쁘지는 않다고 한다.
 * (단점)
 * 초기화에만 쓰는 상태 추가 필요
 * input 값 자체 컨트롤 불가
 */
class UnControlledComponent extends React.Component {
  email = '';
  password = '';

  state = {
    reset: 0
  };

  render() {
    const { reset } = this.state;
    console.log('render', reset);
    /**
     * 각 input마다 key값을 준다.
     * 리액트에서 key는 각각 element을 구별할 수 있는 값이다.
     * reset을 할 때마다 state값이 바뀌면서 Native Dom의 key값이 바뀌게 된다.
     * 리액트는 key라는 프로퍼티가 바뀌면 기존에 있던 인스턴스가 사라졌다고  인식을 하여 기존에 있던 email0이라는 인스턴스를 지워버리고 email1이라는 인스턴스를 새로 생성한다.
     * 이 과정이 빠르게 발생하니 상태가 초기화된 것 처럼 보인다.
     * 실제로 state  초기화하는 것보다 성능이 나쁘지는 않다.
     * 어짜면 state 초기화보다 빠를 수  있다.
     * state가 외부에 공개되지 않아 캡슐화 장점
     *
     */
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          key={reset + 'email'}
          type="email"
          placeholder="이메일"
          onChange={this.handleChangeEmail}
        />
        <input
          key={reset + 'password'}
          type="password"
          placeholder="비밀번호"
          onChange={this.handleChangePassword}
        />
        <button type="submit">가입하기</button>
        <button type="button" onClick={this.handleReset}>
          초기화
        </button>
      </form>
    );
  }

  handleChangeEmail = value => {
    this.email = value;
  };

  handleChangePassword = value => {
    this.password = value;
  };

  handleSubmit = () => {
    console.log(this.email, this.password);
  };

  handleReset = () => {
    this.email = '';
    this.password = '';
    this.setState(prev => ({
      reset: prev.reset + 1
    }));
  };
}

export default UnControlledComponent;
