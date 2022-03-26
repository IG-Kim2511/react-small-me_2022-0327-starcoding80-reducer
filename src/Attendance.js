import React, { useReducer, useState } from "react";

//🍀 js0903. reducer 함수
const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;

      const newStudent = {
        id: Date.now(),
        name: name, // name, .........둘이 같을때 짧게 코딩해도 됨
        isHere: false,
      };

      // 🦄 return {~ } : 새로운 state값을 return하고 마무리
      return {
        const: state.count + 1,
        students: [...state.students, newStudent],
      };

    //js 0911. 삭제버튼 기능
    /* filter :
        state.students.id 리스트 !== payload.id
        전체 리스트에서, payload로 넘어온 것만 빼고 return함
    */
    case "delete-student":
      return {
        const: state.count - 1,
        students: state.students.filter(
          (p_student) => p_student.id !== action.payload.id
        ),
      };
    //   js0931
    /* map loop에서 같은 id 찾으면, 그아이템에 isHere이 true면 false로, false면 true로 바꿔줌 */
    case "mark-student":
      return {
        const: state.count,
        students: state.students.map((p_student)=>{
            if (p_student.id === action.payload.id) {   
                return  {...p_student, isHere: !p_student.isHere}; 
                
            }

            return p_student;
        }
        
        ),
      };

    default:
      return state;
  }
};

// 🍀 js0548. state초기값...밖에 정의하기
const initialState = {
  count: 0,

  //  reducer 변수에  다 정리되어 있으므로, 빈칸으로 초기값 넣음
  students: [],
  //   students: [
  //     {
  //       id: Date.now(),
  //       name: "James",
  //       isHere: false,
  //     },
  //   ],
};

const Attendance = () => {
  // 🍀 js0541. 준비..input
  const [name, setName] = useState("");

  //  js0548
  const [stateStudentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Attendance List (reducer upgrade)</h1>

      {/* js0548 */}
      <h3>people count : {stateStudentsInfo.count}</h3>

      {/* js0541 */}
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <button
        onClick={() => {
          dispatch({ type: "add-student", payload: { name } });
        }}
      >
        add
      </button>

      {/* 🍀 js0600. studentsInfo state의 students부분을 map loop하고, 
        students.name을 props로 넘김*/}
      {/*🍀 js0911. delete버튼 기능만들기
        dispatch...props로 넘김
        component의 dispatch, payload정보 --> reducer함수로 보냄    
    */}
      {stateStudentsInfo.students.map((p_student) => {
        return (
          <Student
            key={p_student.id}
            p_name={p_student.name}
            p_dispatch={dispatch}
            p_id={p_student.id}
            p_isHere={p_student.isHere}
          />
        );
      })}
    </div>
  );
};

// js0600
const Student = ({ p_name, p_dispatch, p_id, p_isHere }) => {
  return (
    <div>
      {/* 🍀 js0931. mark기능 만들기 

        🍉10. style 안에서 ? : 문법사용하기

        isHere이 true이면 line-through
        isHere이 false이면 none

        🍉20. onclick, dispatch

    */}
      <span
        style={{
          textdecoration: p_isHere ? "line-through" : "none",
          color: p_isHere ? "gray" : "black",
        }}

        onClick={()=>{ p_dispatch({type:"mark-student", payload: {p_id}})}}
      >
        {p_name}
      </span>

      {/* js0911 */}
      <button
        onClick={() => {
          p_dispatch({ type: "delete-student", payload: { p_id } });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Attendance;
