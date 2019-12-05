import React from 'react';

class ControlledComponent extends React.Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    console.log('render')
    const { email, password } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={this.handleChangeEmail}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={this.handleChangePassword}
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