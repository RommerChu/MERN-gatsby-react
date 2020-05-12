import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { Container, Row } from "react-bootstrap"
import StudentList from '../../students/components/students_list'

const Create=()=>{

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

  const {register, handleSubmit, errors}  = useForm()
  const [showMessage, editShowMessage] = useState(false)
  const [errorMessage, editErrorMessage] = useState(false)

  const Message=()=>{
    if(showMessage){
      return(
        <div className="alert alert-success">
          Teacher is successfully added!
        </div>
      )
    }
    return "";
  }

  const ShowErrorMessage=()=>{
    if(errorMessage){
      return(
        <div className="alert alert-danger">
          <strong>Whoops!</strong> Something went wrong, Please try again later.
        </div>
      )
    }
    return "";
  }

  const onSubmit=  (formData,event)=>{
    editShowMessage(false)
    editErrorMessage(false)

    try{
      axios.post('http://localhost:5000/api/teachers',formData).then((response)=>{
        console.log(response.data)
        editShowMessage(true)
      })

    }catch (e) {
      editShowMessage(true)
    }
    event.target.reset()
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="col-12">
        <h2>ADD A TEACHER RECORD</h2>
        <Message/>
        <ShowErrorMessage/>
        <Row>
          <div className="col-4 form-group">
            <label className="label">Name</label>
            <input type="text" name="firstName" className="form-control input input" placeholder="First Name" ref={register({required:true})} />
            {errors.firstName && <p className="error">Please address information</p>}
            <input type="text" name="middleName" className="form-control input" placeholder="Middle Name" ref={register({required:true})} />
            {errors.middleName && <p className="error">Please address information</p>}
            <input type="text" name="lastName" className="form-control input" placeholder="Last Name" ref={register({required:true})} />
            {errors.lastName && <p className="error">Please address information</p>}
            <input type="text" name="age" className="form-control input" placeholder="Age" ref={register({required:true})} />
            {errors.age && <p className="error">Please address information</p>}
          </div>
          <div className="col-4 form-group">
            <label className="label">Address</label>
            <input type="text" name="street" className="form-control input" placeholder="Enter no. and street" ref={register({required:true})} />
            {errors.street && <p className="error">Please address information</p>}
            <input type="text" name="city" className="form-control input" placeholder="City" ref={register({required:true})} />
            {errors.city && <p className="error">Please address information</p>}
            <input type="text" name="province" className="form-control input" placeholder="Province" ref={register({required:true})} />
            {errors.province && <p className="error">Please address information</p>}
            <input type="text" name="postalCode" className="form-control input" placeholder="Postal Code" ref={register({required:true})} />
            {errors.postalCode && <p className="error">Please address information</p>}
          </div>
          <div className="col-4 form-group">
            <label className="label">Contact:</label>
            <input type="text" name="telephone" className="form-control input" placeholder="Telephone" ref={register({required:true})} />
            {errors.telephone && <p className="error">Please address information</p>}
            <label className="label">Email:</label>
            <input type="text" name="email" className="form-control input" placeholder="Email" ref={register({required:true})}/>
            {errors.email && <p className="error">Please enter a value for email</p>}
            <select className="form-control input" name="student">
              {/*<StudentsList students={STUDENTS}/>*/}
              <StudentList students={STUDENTS}/>
            </select>
          </div>
          <col-12>
            <button type="submit" className="btn btn-primary px-sm-5 mr-2">Add</button>
          </col-12>
        </Row>
      </form>
    </Container>
  )
}

export default Create