import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

// useCallback: 렌더링 성능 최적화, 이벤트 핸들러 함수 필요할 때만 생성
// 기존은 리렌더링 할때마다 함수 새로 생성...
// useCallback(생성하고 싶은 함수, 배열: 어떤 값이 바뀌었을 때 함수를 새로 생성해주어야하는지 명시)
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);  // 컴포넌트가 처음 렌더링 될 때만 함수 생성

  const onInsert = useCallback(e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    // useRef로 만든 객체 안의 current값이 실제 엘리먼트
    inputEl.current.focus();
  }, [number, list]); // number혹은 list가 바뀌었을 때만 함수 생성 


  //렌더링 성능 최적확: useMeomo
  //렌더링하는 과정에서 특정값이 바뀌었을 때만 연산 실행, (list배열의 내용이 바뀔때마다 getAverage함수 호출)
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
