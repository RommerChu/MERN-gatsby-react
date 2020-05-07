import React from 'react'

const TeachersList = props =>{
  return (
    <div>
      {
        props.teachers.map((teacher)=>{
          return <option key={teacher.id} value={teacher.id}>{teacher.firstName} </option>
        })
      }
    </div>
  )
}

export default TeachersList