import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { Container, Row } from "react-bootstrap"
import TeachersList from "../components/teachers_list"

const Create=()=>{
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
          <strong>Oh my!</strong>Something went wrong, Please try again later.
        </div>
      )
    }
    return "";
  }
  const onSubmit=  async (formData,event)=>{
    editShowMessage(false)
    editErrorMessage(false)
    try{
      await axios.post('http://localhost:8000/api/teachers',formData)
      editShowMessage(true)
    }catch (e) {
      editErrorMessage(true)
    }
    event.target.reset()
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="col-12">
        <h2>ADD A TEACHER RECORD</h2>
        <Message/>
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
            <label className="label">Contact no.</label>
            <input type="text" name="telephone" className="form-control input" placeholder="Contact Number" ref={register({required:true})} />
            {errors.telephone && <p className="error">Please address information</p>}
            <input type="text" name="email" className="form-control input" placeholder="Email" ref={register({required:true})} />
            {errors.email && <p className="error">Please address information</p>}
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