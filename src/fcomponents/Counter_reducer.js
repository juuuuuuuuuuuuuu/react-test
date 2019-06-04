
import React, { useReducer } from "react";

function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
    return { value: state.value + 1 }
    case 'DECREMENT':
    return { value: state.value - 1 }
    default:
    return state;
  }
}

const Counter_reducer = () => {
// useReducer (리듀서 함수, 기본값)
//  state: 현재 가르키고 있는 상태 , dispatch: 액션을 발생시키는 함수
// 장점: 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있는 구조!!!

  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter_reducer;

