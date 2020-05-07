import React from 'react'
// import {Link} from 'react-router-dom'

const TeacherCard = props =>{

  console.log("I am here")
  console.log(props.teachers)

  if(props.teachers.length === 0){
    return (
      <div className="row">
        <div className="col-lg-12">
          <img alt="" src="./images/gatsby-icon.png" />
        </div>
      </div>
    )
  }

  return (
    <div className="row">
      {props.teachers.map( teacher =>{
        return (
          <div className="col-lg-3" key={teacher._id}>
            <div className="card">
              <img className="teacher-img" alt={teacher.firstName} src="./images/gatsby-icon.png" />
              <h3>{teacher.firstName}&nbsp;{teacher.middleName}&nbsp;{teacher.lastName}</h3>
              <p>Age: {teacher.age}</p>
              <p>Address: {teacher.address}</p>
              <p>Tel: {teacher.telephone}</p>



              <p className="teacher"><strong>{teacher.email}</strong></p>
              <p>{teacher.phone}</p>
              <p>

                <Link to={`/author/${author._id}/show`}>
                  <button>Profile</button>
                </Link>


              </p>
            </div>
          </div>
        )
      })}





    </div>
  )
}

export default AuthorCard