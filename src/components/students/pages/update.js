import React, { useState } from "react"
import { useForm } from "react-hook-form"

import TeachersList from "../../teacher/components/teachers_list"
import { Container, Row } from "react-bootstrap"

const Update = () => {

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

  const {register, handleSubmit}  = useForm()
  const [showMessage, editShowMessage] = useState(false)

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

  const onSubmit=  (formData,event)=>{

    // console.log("Inside this function")
    // console.log(formData)

    editShowMessage(true)
    event.target.reset()
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="col-12">
        <h2>UPDATE A STUDENT RECORD</h2>
        <Message/>
        <Row>
          <div className="col-4 form-group">
            <label className="label">Name</label>
            <input type="text" name="firstName" className="form-control input input" placeholder="First Name" ref={register({required:true})} />
            <input type="text" name="middleName" className="form-control input" placeholder="Middle Name" ref={register({required:true})} />
            <input type="text" name="lastName" className="form-control input" placeholder="Last Name" ref={register({required:true})} />
            <input type="text" name="age" className="form-control input" placeholder="Age" ref={register({required:true})} />
            <label className="label">Address</label>
            <input type="text" name="street" className="form-control input" placeholder="Enter no. and street" ref={register({required:true})} />
            <input type="text" name="city" className="form-control input" placeholder="City" ref={register({required:true})} />
            <input type="text" name="province" className="form-control input" placeholder="Province" ref={register({required:true})} />
            <input type="text" name="postalCode" className="form-control input" placeholder="Postal Code" ref={register({required:true})} />
          </div>
          <div className="col-4 form-group">
            <label className="label">Father</label>
            <input type="text" name="father" className="form-control input" placeholder="Father'Name" ref={register({required:true})} />
            <input type="text" name="contact1" className="form-control input" placeholder="Contact Number" ref={register({required:true})} />
            <input type="text" name="email1" className="form-control input" placeholder="Email" ref={register({required:true})} />
            <label className="label">Mother</label>
            <input type="text" name="mother" className="form-control input" placeholder="Mother's Name" ref={register({required:true})} />
            <input type="text" name="contact2" className="form-control input" placeholder="Contact Number" ref={register({required:true})} />
            <input type="text" name="email2" className="form-control input" placeholder="Email" ref={register({required:true})} />
          </div>
          <div className="col-4 form-group">
            <label className="label">Level:</label>
            <input type="text" name="level" className="form-control input" placeholder="eg. Kinder, JK, SK" ref={register({required:true})} />
            <label className="label">Section:</label>
            <input type="text" name="section" className="form-control input" placeholder="eg. Alpha, Bravo, Charlie" ref={register({required:true})}/>
            <label className="label">Teacher:</label>
            <select className="form-control input" name="teacher">
              <TeachersList teachers={TEACHERS}/>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary px-sm-5 mr-2">Update</button>
          </div>
        </Row>
      </form>
    </Container>
  )
}

export default Update