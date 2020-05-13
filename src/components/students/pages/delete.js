import React from 'react'
import axios from 'axios'

 const deleteStudent=async (student_id)=>{
    try{
      const response = await axios.delete(`http://localhost:8000/api/students/${student_id}`)
      console.log(response.data)

    }catch (e) {
      console.log("ERROR- " +e)
    }
  }
export default deleteStudent()