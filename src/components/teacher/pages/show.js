import React,{useState,useEffect} from 'react'
import {Link, useParams, Redirect, useHistory} from 'react-router-dom'
import axios from 'axios'

const Show=(props)=>{
  let {id} = useParams()
  let history = useHistory()

  const [teacherState, editTeacher] = useState()
  const[isFetched, editIsFetched ] = useState(false);

  useEffect(()=>{
    const fetchData=async ()=>{
      try{
        const response = await axios.get(`http://localhost:5000/api/teachers/${id}`)
        editTeacher(response.data)
        console.log(response.data)
        editIsFetched(true)

      }catch (e) {
        console.log("ERROR - "+e)
      }
    }
    fetchData()
  },[])

  const deleteTeacher=async (teacher_id)=>{

    try{
      const response = await axios.delete(`http://localhost:5000/api/teachers/${teacher_id}`)
      console.log(response.data)
      history.push("/teachers")

    }catch (e) {
      console.log("ERROR- " +e)
    }
  }

  const LoadComponent =()=>{
    if(isFetched){
      return (
        <div className="col-lg-6" >
          <div className="card">
            <img className="teacher-img"  src="../../../images/gatsby-icon.png" />
            <h3>{teacherState.teacher.firstName}&nbsp;{teacherState.teacher.middleName}&nbsp;{teacherState.teacher.lastName}</h3>
            <p><strong>{teacherState.teacher.age}</strong></p>
            <p><strong>{teacherState.teacher.address.street}</strong></p>
            <p><strong>{teacherState.teacher.address.city}</strong></p>
            <p><strong>{teacherState.teacher.address.province}</strong></p>
            <p><strong>{teacherState.teacher.address.postalCode}</strong></p>
            <p><strong>{teacherState.teacher.telephone}</strong></p>
            <p><strong>{teacherState.teacher.email}</strong></p>
            <p>Students : {teacherState.teacher.students.length}</p>

            <p><Link to="/"><button>Profile</button></Link></p>
            <p><button className="btn btn-danger" onClick={() => deleteTeacher(id)}>Delete</button></p>
            <p><Link to={`/teacher/update/${id}`}><button>Edit</button></Link></p>
          </div>
        </div>
      )
    }else  return (
      <div>
        <img src="../../../images/gatsby-icon.png" height="100"/>
        <h3>Loading data...please wait.</h3>
      </div>
    )
  }

  return (
    <div className="row">
      <div className="col-lg-12 text-center">
        <LoadComponent/>
      </div>
    </div>
  )
}

export default Show