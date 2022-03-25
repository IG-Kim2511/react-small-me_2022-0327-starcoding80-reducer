import React, { useReducer, useState } from "react";

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
*/

  // js0409-20.
const reducer = (state, action)=>{
  console.log('execute reducer',state, action)
};


function App() {  
  // 🍀 js0404. input value
  const [number, setNumber] = useState(0);


  // js0409-10
  const [stateMoney, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer Bank</h2>


      {/* js0409-30.*/}
      <p>account : {stateMoney} $</p>

      {/* js0404.*/}
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />

      {/* js0409-40.*/}
      <button onClick={()=>{
        dispatch({type: 'deposit'});
      }}>Deposit</button>



      
      <button>withdraw</button>

    </div>
  );
}

export default App;
