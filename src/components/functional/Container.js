import React, { useCallback, useMemo } from 'react'
import useInputState from '../customhook/useInputState';
import Input from './Input'

/**
 * 함수형 컴포넌트: props를 받아 node를 렌더하는 함수
 * 본문자체가 render 함수이기때문에 이벤트핸들러를 어디서 만들더라도 새로운 함수 계속 만듬 ==> useCallback사용
 * useCallback: 함수를 감싸고 두번째 배열에 빈배열 넘김
 * --> 렌더시마다 새로운 함수 생성하지 않음
 * --> 항상 같은 함수 인스턴스 반환,
 * --> 첫번째인자: 클로저(당시의 상태를 기억)
 * --> 두전째인자: 의존하고 있는 값
 * --> 의존하고 있는 값이 바뀌게 되면 새로 함수 생성(클로저 무의미해짐)
 */
function Container() {
  const [email, setEmail, handleChangeEmail] = useInputState('');
  const [password, setPassword, handleChangePassword] = useInputState('');

  const handleSubmit = useCallback(() => {
    console.log('###', email, password)
  }, [email, password]);

  const handleReset = () => {
    setEmail('');
    setPassword('');
  }

  const emailAccesory = useMemo(() => {
    return email !== "" && <button>X</button>;
  }, [email]);

  const passwordAccesory = useMemo(() => {
    return password !== "" && <button>X</button>;
  }, [password]);

    return (
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={handleChangeEmail}
          accesory={emailAccesory}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          password={password}
          onChange={handleChangePassword}
          accesory={passwordAccesory}
        />
        <button type="submit">가입하기</button>
        <button type="button" onClick={handleReset}>초기화</button>
      </form>
    )
}

export default Container;