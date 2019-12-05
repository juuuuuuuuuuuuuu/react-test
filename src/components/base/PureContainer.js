import React from 'react'

import Input from './PureComponent'

/**
 * purecomponent 사용
 * state로 상태값을 관리하며 purecompoent는 props을 통해 바뀔 때만 재렌더링 (렌더 최적화)
 * render내에 인라인 함수: render실행시마다 함수 인스턴스 새로 생성, 코드 실행시 false로 출력 => Input이라는 purecomponent에 props로 내려오는 함수가 모두 다르다는것.
 * 즉 shallow compare로 함수 자체가 다른지 비교하기 때문에 항상다르다고 판단하여 re-render
 *
 */
class PureContainer extends React.Component {
  state = {
    email: '',
    password: '',
  }
  
  render() {
    const { email, password } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          // onChange={this.handleChangeEmail}
          onChange={({target: { value }}) => { this.setState({email: value})}}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          password={password}
          // onChange={this.handleChangePassword}
          onChange={({target: { value }}) => { this.setState({password: value})}}
        />
        <button type="submit">가입하기</button>
        <button type="button" onClick={this.handleReset}>초기화</button>
      </form>
    );
  }

  handleChangeEmail = ({ target: { value } }) => {
    this.setState({ email: value })
  }
  
  handleChangePassword = ({ target: { value } }) => {
    this.setState({ password: value })
  }

  handleSubmit = () => {
    console.log(this.state.email, this.state.password)
  }

  handleReset = () => {
    this.setState({
      email: '',
      password: '',
    })
  }
}

export default PureContainer