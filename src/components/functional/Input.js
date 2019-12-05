import React, { useRef } from 'react'
 /**
  * useRef: DOM 객체 얻어오기 위해 사용
  * --> 값이 변경될 때마다 렌더 될 필요 없으면 useRef사용해서 해당 값 가져올 때 사용
  */
function Input(props) {
  const { type, placeholder, value, onChange, accesory } = props;
  const renderCount = useRef(0);
  const inputElement = useRef(null);

  console.log(placeholder, ++renderCount.current)
  console.log(inputElement.current)
  return (
    <div style={{ display: 'flex' }}>
      <input ref={inputElement} type={type} placeholder={placeholder} value={value} onChange={onChange} />
      {accesory}
    </div>
  )
}

export default React.memo(Input)
