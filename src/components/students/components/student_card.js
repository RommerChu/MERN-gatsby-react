import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Row } from "react-bootstrap"
import axios from 'axios'

const StudentCard = () =>{

  const [studentsState,editStudentsState] = useState({students:[]})

  useEffect(()=>{

    async function fetchStudent(){
      const getStudentRes = await axios.get('http://localhost:5000/api/students');  //Using Axios make an api call to get all students
      editStudentsState(getStudentRes.data) // Store the students in the state I created above
    }
  fetchStudent()





  },[])

  if(studentsState.length === 0){
    return (
      <Row>
        <div className="col-lg-12">
          <img alt="" src=".components/images/gatsby-astronaut.png" />
        </div>
      </Row>
    )
  }

  return (
    <Row>
      {studentsState.students.map( student =>{
        return (
          <div className="col-lg-3" key={student.id}>
            <div className="card">
              <img className="student-img" alt={student.title} src="./image/gatsby-icon.png" />
              <h5>{student.firstName}</h5>
              <p className="teacher">-By: <strong>{student.teacher}</strong></p>
              <p>
                <a href={`/students/${student.id}/show`}>
                  <button>View Student</button>
                </a>
              </p>
            </div>
          </div>
        )
      })}
    </Row>
  )
}

export default StudentCard