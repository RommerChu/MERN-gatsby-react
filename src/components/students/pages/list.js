import React from 'react'

import StudentCard from "../components/student_card"

const  List = ()=>{
  const STUDENTS = [
    {
      id:"s1",
      firstName:"John",
      middleName:"Ramos",
      lastName:"Chu",
      age:"5",
      address:[{
        street:"20 Hansen Blvd",
        city:"Orangeville",
        province:"ON",
        postalCode:"L6V3C5",
      }],
      parents:[{
        father:"Rommer",
        contact1:"142-156-4569",
        email1:"rommer.chu@gmail.com",
        mother:"Corazon",
        contact2:"225-556-8779",
        email2:"corazonchu@gmail.com",

      }],
      telephone:"142-156-4569",
      level:"kinder",
      section:"Alpha"
    },
    {
      id:"s2",
      firstName:"Peter",
      middleName:"Ramos",
      lastName:"Chu",
      age:"5",
      address:[{
        street:"20 Center St",
        city:"North York",
        province:"ON",
        postalCode:"M2J1A8",
      }],
      parents:[{
        father:"Paul",
        contact1:"555-6117-8888",
        email1:"paul@email.com",
        mother:"Stephanie",
        contact2:"226-4578-1115",
        email2:"stephanie@email.com",
      }],
      telephone:"226-4578-111",
      level:"jk",
      section:"Bravo"
    },
    {
      id:"s3",
      firstName:"Tetley",
      middleName:"Smith",
      lastName:"Doe",
      age:"4",
      address:[{
        street:"3219 Curve road",
        city:"Oakville",
        province:"ON",
        postalCode:"A1f9R5",
        country:"Canada"
      }],
      parents:[{
        father:"Steven",
        contact1:"666-6666-6661",
        email1:"steven@email.com",
        mother:"Jackie",
        contact2:"666-7777-8194",
        email2:"jackie@email.com",
      }],
      telephone:"666-7777-8194",
      level:"sk",
      section:"Charlie"
    },
  ]

  return (
    <div className="row">
      <div className="col-lg-12 text-center">
        <h1>This page will list all the students</h1>
        <br/>
        <br/>
        <StudentCard students={STUDENTS}/>
      </div>
    </div>
  )
}

export default List