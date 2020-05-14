import React,{useState,useEffect} from 'react'
import { Row } from "react-bootstrap"
import axios from 'axios'


const TeacherCard = () =>{

    const [teachersState,editTeachersState] = useState({teachers:[]})

    useEffect(()=>{

        async function fetchTeacher(){
            const getTeachersRes = await axios.get('http://localhost:5000/api/teachers');
            editTeachersState(getTeachersRes.data)
        }
        fetchTeacher()
    },[])

    if(teachersState.length === 0){
        return (
          <Row>
              <div className="col-lg-12">
                  <img alt="" src=".components/images/gatsby-astronaut.png" />
              </div>
          </Row>
        )
    }

  const deleteTeacher=async (teacher_id)=>{
    try{
      const response = await axios.delete(`http://localhost:5000/api/teachers/${teacher_id}`)
      console.log(response.data)

    }catch (e) {
      console.log("ERROR- " +e)
    }
  }

    return (
      <Row>
          {teachersState.teachers.map( teacher =>{
              return (
                <div className="col-lg-3" key={teacher.id}>
                    <div className="card">
                        <img alt="" src="./image/gatsby-icon.png" width="120px" height="120px" style={{backgroundColor:`gray`}}/>
                        <p className="ptag">Name: {teacher.firstName}</p>
                        <p className="ptag">Middle Name: {teacher.middleName}</p>
                        <p className="ptag">Last Name: {teacher.lastName}</p>
                        <p className="ptag">Age: {teacher.age}</p>
                        <p className="ptag">Address: {teacher.address.street}</p>
                        <p className="ptag">City: {teacher.address.city}</p>
                        <p className="ptag">Province: {teacher.address.province}</p>
                        <p className="ptag">PostalCode: {teacher.address.postalCode}</p>
                        <p className="ptag">Father: {teacher.telephone}</p>
                        <p className="ptag">Tel.: {teacher.email}</p>
                        <br/>
                        {/*<p><a href={`./teachers/${teacher.id}/show/`}><button className="btn btn-primary">View Teacher</button></a></p>*/}
                        {/*<p><a to={`./teachers/${teacher.id}/update/`} className="btn btn-warning">Update Teacher</a></p>*/}
                      <p><a onClick={() => deleteTeacher(teacher._id)} className="btn btn-warning">Delete Teacher</a></p>

                    </div>
                </div>
              )
          })}
      </Row>
    )
}

export default TeacherCard