// import React,{useState, useEffect} from 'react'
// import { Row } from "react-bootstrap"
//
// import TeacherCard from '../../teacher/components/teacher_card'
//
// const List=()=>{
//
//   const [teachersList, editTeachers] = useState([])
//   const[isFetched, editIsFetched ] = useState(false);
//
//   useEffect( () => {
//     const fetchTeachers= async ()=>{
//
//       try{
//         const response = await axios.get('http://localhost:8000/api/teachers')
//
//         console.log("response is "+ response)
//         editTeachers(response.data)
//         editIsFetched(true)
//       }
//       catch (e) {
//         console.log(e)
//       }
//     }
//     fetchTeachers()
//   },[]);
//
//   const LoadComponent=()=>{
//     if(isFetched){
//       return (
//         <TeacherCard teachers={teachersList.teachers}/>
//       )
//     }else  return (
//       <div>
//         <h3>Loading data...please wait.</h3>
//       </div>
//     )
//   }
//
//
//   return (
//     <div className="row">
//       <div className="col-lg-12 text-center">
//         <h1>This page will list all the authors</h1>
//         <br/><br/>
//         <LoadComponent/>
//       </div>
//     </div>
//   )
// }
//
// export default List
import React from 'react'
import TeachersCard from "../components/teacher_card"
import { Row } from "react-bootstrap"

const  List = ()=>{
  const TEACHERS = [
    {
      id:'t1',
      firstName: "Maria",
      middleName:"Ortega",
      lastName:"Sanchez",
      age:"35",
      address:[{
        street:"35 Orangemouse st.",
        city:"Pensyvannia",
        province:"Montreal",
        postalCode:"G6F5R7",
      }],
      telephone:"234-4567-7890",
      email:"maria@email.com"
    },
    {
      id:'t2',
      firstName: "Jane",
      middleName:"Ordogh",
      lastName:"Timber",
      age:"32",
      address:[{
        street:"45 Lambskin Crt",
        city:"Darsom",
        province:"On",
        postalCode:"L8W3R4",
      }],
      telephone:"654-7898-8821",
      email:"jane@email.com"
    },
    {
      id:'t3',
      firstName: "Dahlia",
      middleName:"Swiza",
      lastName:"Fontain",
      age:"35",
      address:[{
        street:"20 Streak road crt",
        city:"Oatmeal",
        province:"On",
        postalCode:"J7Y3T5",
      }],
      telephone:"645-777-1111",
      email:"dahlia@email.com"
    },
  ]

  return (
    <Row>
      <div className="col-lg-12 text-center">
        <h1>This page will list all the teachers</h1>
        <br/>
        <br/>
        <TeachersCard teachers={TEACHERS}/>
      </div>
    </Row>
  )
}

export default List