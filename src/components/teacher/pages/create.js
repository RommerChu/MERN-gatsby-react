import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'

const Create=()=>{
  const {register, handleSubmit, errors}  = useForm()
  const [showMessage, editShowMessage] = useState(false)
  const [errorMessage, editErrorMessage] = useState(false)

  const Message=()=>{
    if(showMessage){
      return(
        <div className="alert alert-success">
          <strong>Success!</strong> Teacher added!
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
    <div className="row">
      <div className="col-lg-12 text-center ">
        <h1>Add a new Teacher </h1>
        <br/>
        <div className="row text-left">
          <div className="col-lg-6 mx-auto">
            <Message/>
            <ShowErrorMessage/>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label >Name:</label>
                <input  type="text" name="firstName" className="form-control" placeholder="Enter name" ref={register({required:true, minLength:5})} />
                {errors.firstName && <p className="error"><strong>Please enter first name</strong></p>}
              </div>
              <div className="form-group">
                <label >Middle Name:</label>
                <input  type="text" name="middleName" className="form-control" placeholder="Enter the middle name" ref={register({required:true, minLength:5})} />
                {errors.middleName && <p className="error"><strong>Please enter middle name</strong></p>}
              </div>
              <div className="form-group">
                <label >Last Name:</label>
                <input  type="text" name="lastName" className="form-control" placeholder="Enter the last name" ref={register({required:true, minLength:5})} />
                {errors.lastName && <p className="error"><strong>Please enter last name</strong></p>}
              </div>
              <div className="form-group">
                <label >Age:</label>
                <input  type="text" name="age" className="form-control" placeholder="Enter the name" ref={register({required:true})} />
                {errors.age && <p className="error"><strong>Please enter age</strong></p>}
              </div>
              <div className="form-group">
                <label >Address:</label>
                <input  type="text" name="street" className="form-control" ref={register({required:true, minLength:5})} />
                {errors.address.street && <p className="error"><strong>Please address information</strong></p>}
                <input  type="text" name="city" className="form-control" ref={register({required:true, minLength:5})} />
                {errors.address.city && <p className="error"><strong>Please address information</strong></p>}
                <input  type="text" name="province" className="form-control" ref={register({required:true, minLength:5})} />
                {errors.address.province && <p className="error"><strong>Please address information</strong></p>}
                <input  type="text" name="postalCode" className="form-control" ref={register({required:true, Length:5})} />
                {errors.address.postalCode && <p className="error"><strong>Please address information</strong></p>}
              </div>
              <div className="form-group">
                <label >Telephone:</label>
                <input  type="text" name="telephone" className="form-control" placeholder="Enter the name" ref={register({required:true, Length:13})} />
                {errors.telephone && <p className="error"><strong>Please enter telephone</strong></p>}
              </div>
              <div className="form-group">
                <label >Email:</label>
                <input type="email" name="email" className="form-control" placeholder="Enter email" ref={register({required:true})} />
                {errors.email && <p className="error"><strong>Please enter a value for email</strong></p>}
              </div>
              <button type="submit" className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create