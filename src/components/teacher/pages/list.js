import React,{useState, useEffect} from 'react'
import axios from 'axios'

import TeacherCard from '../../teacher/components/teacher_card'



const List=()=>{

  const [teachersList, editTeachers] = useState([])
  const[isFetched, editIsFetched ] = useState(false);

  useEffect( () => {
    const fetchTeachers= async ()=>{

      try{
        const response = await axios.get('http://localhost:8000/api/teachers')

        console.log("response is "+ response)
        editTeachers(response.data)
        editIsFetched(true)
      }
      catch (e) {
        console.log(e)
      }
    }
    fetchTeachers()
  },[]);

  const LoadComponent=()=>{
    if(isFetched){
      return (
        <TeacherCard teachers={teachersList.teachers}/>
      )
    }else  return (
      <div>
        <h3>Loading data...please wait.</h3>
      </div>
    )
  }


  return (
    <div className="row">
      <div className="col-lg-12 text-center">
        <h1>This page will list all the authors</h1>
        <br/><br/>
        <LoadComponent/>
      </div>
    </div>
  )
}

export default List