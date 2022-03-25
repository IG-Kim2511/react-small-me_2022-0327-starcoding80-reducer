import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "add-student":

        const name = action.payload.name;

        const newStudent = {
            id: Date.now(),
            name: name,
            isHere: false,
        }
        
        return{
            const: state.count +1, 
            students: [ ...state.students, newStudent ],
        }

        default:
            return state;
        
    }

};

// 🍀 js0548. state초기값...밖에 정의하기
const initialState = {
  count: 0,
  students: [
    {
      id: Date.now(),
      name: "James",
      isHere: false,
    },
  ],
};

const Attendance = () => {
  // 🍀 js0541. 준비..input
  const [name, setName] = useState("");

  //  js0548
  const [stateStudentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Attendance List</h1>

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

      <button onClick={()=>{
          dispatch({type:"add-student", payload : {name}})
      }}>add</button>

      {/* 🍀js0600 . studentsInfo state의 students부분을 map loop하고, 
        students.name을 props로 넘김*/}
      {stateStudentsInfo.students.map((p_student) => {
        return <Student key={p_student.id} name={p_student.name} />;
      })}
    </div>
  );
};

const Student = ({ name }) => {
  return (
    <div>
      <span>{name}</span>
      <button>Delete</button>
    </div>
  );
};

export default Attendance;
