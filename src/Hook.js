import React, { useState } from "react";
import Counter from "./fcomponents/Counter";
import Info from "./fcomponents/Info";
import ContextSample from "./fcomponents/ContextSample";
import Counter_reducer from "./fcomponents/Counter_reducer";
import Info_reducer from "./fcomponents/Info_reducer";
import Average from "./fcomponents/Average";
import UsePromiseSample from "./fcomponents/usePromise/usePromiseSample";

const Hook = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <Counter_reducer />
      {visible && <Info />}
      <Average />
      <ContextSample />
      <UsePromiseSample/>
    </div>
  );
};

export default Hook;
