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

// 🍀 js0612. use reducer , switch
/* 
  dispatch... type:"~~"  뜻 : 

  reducer에 들어오는 수많은 dispatch()들 중 적용할 함수 지정할때 사용됨

  보통 switch , if esle 사용

  action.type이 'deposit'일때 

  지정되지않은 action.type이 온때 : default값으로 기존 state return


  🍉-20. withdraw 기능

  🍉-30. default
    action.type이 지정되지 않은게 오면, 기존state값 0 ..return함


*/

// 🍀 js0620. dispatch의 type을 variable로 빼서 사용하기
const ACTION_TYPES ={
  deposit : "deposit",
  withdraw :"withdraw",
};



// js0409-20.
const reducer = (state, action) => {
  console.log("execute reducer", state, action);
  console.log(action.payload);

  //🍉 switch 안쓰고 그냥 간단하게 return할때
  // return state + action.payload;

  // js0612
  switch (action.type) {
    case "deposit":
      return state + action.payload;

  // js0612-20 , js0620
    // case "withdraw":
    case ACTION_TYPES.withdraw:
      return state - action.payload;

  // js0612-30
    default:
      return state;
  }
};

function App() {
  // 🍀 js0404. input value
  const [inputNumber, setInputNumber] = useState(0);

  // js0409-10, js0409-50
  const [stateMoney, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>useReducer practice</h1>

      <h1> Bank (reducer basic)</h1>

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

      <h3>input number : {inputNumber}</h3>

      {/* js0409-40. -60*/}
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: inputNumber });
        }}
      >
        Deposit
      </button>

      {/* js0612-20, -30, js0620*/}
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: inputNumber });
        }}
      >
        withdraw
      </button>

      <Attendance />
    </div>
  );
}

export default App;
