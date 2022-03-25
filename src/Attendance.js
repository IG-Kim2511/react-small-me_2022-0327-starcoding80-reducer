import React, { useReducer, useState } from 'react'


const reducer=()=>{}

const initialState =[
    {
            id: Date.now(),
    }
]

const Attendance = () => {
      // 🍀 js0541. 준비..input
      const [name, setName] = useState("")

      const [stateStudentInfo, dispatch] = useReducer(reducer, initialState)
  
      
  return (
    <div>
    
    <h1>Attendance</h1>
    <h3>people count : ?</h3>

    {/* js0541 */}
    <input type="text" 
    
        value={name}
        onChange={(e)=>{ setName(e.target.value)}}
    />

    <button>add</button>

</div>
  )
}

export default Attendance
