import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNicname] = useState('');

  // useEffect: 렌더링될때마다 특정 작업을 수행하도록 설정할 수 있는  Hook
  // componentDidMount, componentDidUpdate를 합친 형태
  // *** didmount만 사용하고 싶을 때
  // useEffect(() => {}, []);
  // *** didupdate에서 특정값 업데이트 될 때만 실행하고 싶을 때
  // useEffect(() => {}, [배열안에 검사하고 싶은 값 (현재 상태관리되고 있는 값 or props로 전달 받은 값)])
 // ***  컴포넌트가 unmount 전이나 willupdate 되기 직전에 어떤 작업 수행하고 싶을 때 --> cleanup함수 반환
 // useEffect(() => {}, return () => {})



  useEffect(() => {
    console.log("렌더링이 완료되었습니다")
    console.log({name, nickname})
    return () => {
      console.log("cleanup");
      console.log(name);
    }
  }, [name])


  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeNickName = e => {
    setNicname(e.target.value)
  }

  return(
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName}/>
      </div>
      <div>
        <b>이름: </b>{name}
        <b>닉네임: </b>{nickname}
      </div>
    </div>
  )
}

export default Info;