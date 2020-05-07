import React from 'react'
import {Link} from 'react-router-dom'

const StudentCard = props =>{

  if(props.students.length === 0){
    return (
      <div className="row">
        <div className="col-lg-12">
          <img alt="" src=".components/images/gatsby-astronaut.png" />
        </div>
      </div>
    )
  }

  return (
    <div className="row">
      {props.students.map( student =>{
        return (
          <div className="col-lg-3" key={student.id}>
            <div className="card">
              <img className="book-img" alt={student.title} src="./image/gatsby-icon.png" />
              <h3>{student.title}</h3>
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





    </div>
  )
}

export default StudentCard