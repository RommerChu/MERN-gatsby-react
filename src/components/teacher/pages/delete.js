import React from 'react'
import axios from 'axios'

const deleteTeacher=async (teacher_id)=>{
  try{
    const response = await axios.delete(`http://localhost:8000/api/teacher/${teacher_id}`)
    console.log(response.data)

  }catch (e) {
    console.log("ERROR- " +e)
  }
}
export default deleteTeacher()