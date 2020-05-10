import React from 'react'
import {Link} from 'react-router-dom'
import { Row } from "react-bootstrap"

const StudentCard = (props) =>{


  if(props.students.length === 0){
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
      {props.students.map( student =>{
        return (
          <div className="col-lg-3" key={student.id}>
            <div className="card">
              <img className="student-img" alt={student.title} src="./image/gatsby-icon.png" />
              <h5>{student.firstName}</h5>
              <p className="teacher">-By: <strong>{student.teacher}</strong></p>
              <p>
                <Link to={`/students/${student.id}/show`}>
                  <button>View Student</button>
                </Link>
              </p>
            </div>
          </div>
        )
      })}
    </Row>
  )
}

export default StudentCard