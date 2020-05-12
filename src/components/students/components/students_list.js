import React from 'react'

const StudentsList = props =>{
  return (
    <div>
      {
        props.students.map((student)=>{
          return <option key={student.id} value={student.id}>{student.firstName} </option>
        })
      }
    </div>
  )
}

export default StudentsList