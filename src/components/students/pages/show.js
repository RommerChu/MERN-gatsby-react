import React,{useState,useEffect} from 'react'
import { Row } from "react-bootstrap"
import axios from 'axios'


const Show = () =>{

  const [studentsState,editStudentsState] = useState({students:[]})

  useEffect(()=>{

    async function fetchStudent(){
      const getStudentRes = await axios.get('http://localhost:5000/api/student_id');  //Using Axios make an api call to get all students
      editStudentsState(getStudentRes.data) // Store the students in the state
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
              <img alt="" src="./image/gatsby-icon.png" width="120px" height="120px" style={{backgroundColor:`gray`}}/>
              <p className="ptag">Name: {student.firstName}</p>
              <p className="ptag">Middle Name: {student.middleName}</p>
              <p className="ptag">Last Name: {student.lastName}</p>
              <p className="ptag">Age: {student.age}</p>
              <p className="ptag">Address: {student.address.street}</p>
              <p className="ptag">City: {student.address.city}</p>
              <p className="ptag">Province: {student.address.province}</p>
              <p className="ptag">PostalCode: {student.address.postalCode}</p>
              <p className="ptag">Father: {student.parents.father}</p>
              <p className="ptag">Tel.: {student.parents.contact1}</p>
              <p className="ptag">Email: {student.parents.email1}</p>
              <p className="ptag">Mother: {student.parents.mother}</p>
              <p className="ptag">Tel.:: {student.parents.contact2}</p>
              <p className="ptag">Email: {student.parents.email2}</p>
              <br/>
              <p><a to={`./students/${student.id}/update/`} className="btn btn-warning">Delete Student</a></p>
              {/*<p><a href={`./students/${student.id}/show/`}><button className="btn btn-warning">Delete</button></a></p>*/}
            </div>
          </div>
        )
      })}
    </Row>
  )
}


export default Show