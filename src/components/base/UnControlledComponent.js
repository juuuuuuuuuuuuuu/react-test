import React from 'react';

class UnControlledComponent extends React.Component {
  email = '';
  password = '';

  state = {
    reset: 0
  };

  render() {
    const { reset } = this.state;
    console.log('render', reset);
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
