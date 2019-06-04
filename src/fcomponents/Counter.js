//16.8 버전부터 useState 사용가능
import React, { useState } from "react";

// 함수형 컴포넌트

const Counter = () => {
  //useState에 0을 넣는 것 ==> 기본값을 0 으로 설정
  //useState() 호출후 반환하는 배열 ==> [상태값, 상태를 설정하는 함수]
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b> 입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;

