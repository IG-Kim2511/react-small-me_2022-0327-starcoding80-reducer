import React, { useReducer, useState } from "react";
import Attendance from "./Attendance";


// {/*  */}

/* 🍀 js0409. use reducer

🍉10
  useReducer : useState와 비슷하게 variable의 한 형태

  1번 파라미터 : reducer함수를 통해 state를 바꿈

  2번 파라미터 : state의 초기값

  state와 다를거 없이 variable로써 활용함


  🍉20
  reducer함수의

  1번 파라미터 : state : useReducer의 현재 state를 받음

  2번파라미터 : action : payload를 통해 바뀜. (= usState의  set~~)

  🍉30
  useState처럼 변수로 쓰임. 즉 변수의 한 형태

  🍉40
  dispatch = useState의 set~~ 과 같은방식임 - state를 바꿔주는 함수 

  🍉50
  dispatch()실행하면, reducer실행이 됨

  현재 state : 초기값 0

  action : dispatch();의 파라미터. - 현재 파라미터 없어서 undefined 뜸

  🍉60
  dispatch()의 파라미터 :  object형식으로 만듬

  input에 입력한 값 - useReducer 에 dispatch해서, 

  useReducer의 state값 바꾸기
*/

// js0409-20.
const reducer = (state, action) => {
  console.log(state)
  console.log("execute reducer", state, action);

  console.log(action.payload);
  // return state + action.payload;
};

function App() {
  // 🍀 js0404. input value
  const [inputNumber, setInputNumber] = useState(0);

  // js0409-10, js0409-50
  const [stateMoney, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>useReducer Bank</h1>

      
      {/* js0409-30.*/}
      <h3>account : {stateMoney} $</h3>
      
      {/* js0404.*/}
      <input
      type="number"
      value={inputNumber}
      onChange={(e) => {
        setInputNumber(parseInt(e.target.value));
      }}
      />

      <p>input number : {inputNumber}</p>

      {/* js0409-40. -60*/}
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: inputNumber });
        }}
      >
        Deposit
      </button>

      <button>withdraw</button>


      <Attendance/>
    </div>
  );
}

export default App;
