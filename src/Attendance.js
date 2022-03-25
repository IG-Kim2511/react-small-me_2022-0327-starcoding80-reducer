import React, { useReducer, useState } from 'react'


const reducer=()=>{}


// 🍀 js0548. state초기값...밖에 정의하기
const initialState ={
    count : 0,
    students: [
    {
            id: Date.now(),
            name:'James',
            isHere:false,
    }]
    ,
}

const Attendance = () => {
      // 🍀 js0541. 준비..input
      const [name, setName] = useState("")

    //  js0548
      const [stateStudentsInfo, dispatch] = useReducer(reducer, initialState)
  
      
  return (
    <div>
    
    <h1>Attendance List</h1>

    {/* js0548 */}
    <h3>people count : {stateStudentsInfo.count}</h3>

    {/* js0541 */}
    <input type="text" 
    
        value={name}
        onChange={(e)=>{ setName(e.target.value)}}
    />

    <button>add</button>

    <Student/>

    </div>
  )
}

const Student=({name})=>{
    return(
        <div>
            <span>{name}</span>
            <button>Delete</button>
        </div>
    )
}

export default Attendance
