import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import TeachersList from '../../teacher/components/teachers_list'
import { Container, Row } from "react-bootstrap"


const Create=()=>{


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

  const {register, handleSubmit, errors}  = useForm()
  const [showMessage, editShowMessage] = useState(false)
  const [errorMessage, editErrorMessage] = useState(false)

  const Message=()=>{
    if(showMessage){
      return(
        <div className="alert alert-success">
          Student is successfully added!
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
      axios.post('http://localhost:5000/api/students',formData).then((response)=>{
        console.log(response.data)
        editShowMessage(true)
      })
    }catch (e) {
      editShowMessage(true)
    }
    event.target.reset()
  }

  //AXIOS CALL
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="col-12">
      <h2>ADD A STUDENT RECORD</h2>
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
          <label className="label">Father</label>
          <input type="text" name="father" className="form-control input" placeholder="Father'Name" ref={register({required:true})} />
          {errors.father && <p className="error">Please address information</p>}
          <input type="text" name="contact1" className="form-control input" placeholder="Contact Number" ref={register({required:true})} />
          {errors.contact1 && <p className="error">Please address information</p>}
          <input type="text" name="email1" className="form-control input" placeholder="Email" ref={register({required:true})} />
          {errors.email1 && <p className="error">Please address information</p>}
          <label className="label">Mother</label>
          <input type="text" name="mother" className="form-control input" placeholder="Mother's Name" ref={register({required:true})} />
          {errors.mother && <p className="error">Please address information</p>}
          <input type="text" name="contact2" className="form-control input" placeholder="Contact Number" ref={register({required:true})} />
          {errors.contact2 && <p className="error">Please address information</p>}
          <input type="text" name="email2" className="form-control input" placeholder="Email" ref={register({required:true})} />
          {errors.email2 && <p className="error">Please address information</p>}
        </div>
        <div className="col-4 form-group">
          <label className="label">Level:</label>
          <input type="text" name="level" className="form-control input" placeholder="eg. Kinder, JK, SK" ref={register({required:true})} />
          {errors.level && <p className="error">Please address information</p>}
          <label className="label">Section:</label>
          <input type="text" name="section" className="form-control input" placeholder="eg. Alpha, Bravo, Charlie" ref={register({required:true})}/>
          {errors.section && <p className="error">Please enter a value for title</p>}
          <label className="label">Teacher:</label>
          <select className="form-control input" name="teacher">
            <TeachersList teachers={TEACHERS}/>
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