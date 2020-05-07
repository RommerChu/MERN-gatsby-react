import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

import TeachersList from '../../teacher/components/teachers_list'

const Create = () => {

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


  const Message=()=>{
    if(showMessage){
      return(
        <div className="alert alert-success">
          <strong>Student is successfuly added!</strong>
        </div>
      )
    }
    return "";
  }

  const onSubmit=  (formData,event)=>{

    console.log("Inside this function")
    console.log(formData)

    editShowMessage(true)
    event.target.reset()
  }


  //AXIOS CALL
  return (
    <div className="row">
      <div className="col-lg-12 text-center ">
        <h1>Add a student to my class</h1>
        <br/>
        <div className="row text-left">
          <div className="col-lg-6 mx-auto">
            <Message/>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>First Name:</label>
                <input type="text" name="firstName" className="form-control" placeholder="Enter first name" ref={register({required:true})} />
                {errors.firstName && <p className="error"><strong>Please address information</strong></p>}
                <label>Middle Name:</label>
                <input type="text" name="middleName" className="form-control" placeholder="Enter middle name" ref={register({required:true})} />
                {errors.middleName && <p className="error"><strong>Please address information</strong></p>}
                <label>Last Name:</label>
                <input type="text" name="lastName" className="form-control" placeholder="Enter last name" ref={register({required:true})} />
                {errors.lastName && <p className="error"><strong>Please address information</strong></p>}
                <label>Age:</label>
                <input type="text" name="age" className="form-control" placeholder="Enter age" ref={register({required:true})} />
                {errors.age && <p className="error"><strong>Please address information</strong></p>}
                <label>Address</label>
                < input type="text" name="street" className="form-control" placeholder="Enter no. and street" ref={register({required:true})} />
                {errors.address.street && <p className="error"><strong>Please address information</strong></p>}
                < input type="text" name="city" className="form-control" placeholder="Enter city" ref={register({required:true})} />
                {errors.address.city && <p className="error"><strong>Please address information</strong></p>}
                < input type="text" name="province" className="form-control" placeholder="Enter province" ref={register({required:true})} />
                {errors.address.province && <p className="error"><strong>Please address information</strong></p>}
                < input type="text" name="postalCode" className="form-control" placeholder="Enter postal code" ref={register({required:true})} />
                {errors.address.postalCode && <p className="error"><strong>Please address information</strong></p>}
                <label>Parents:</label>
                < input type="text" name="father" className="form-control" placeholder="Enter father name" ref={register({required:true})} />
                {errors.parents.father && <p className="error"><strong>Please address information</strong></p>}
                < input type="text" name="contact1" className="form-control" placeholder="Enter contact number" ref={register({required:true})} />
                {errors.parents.contact1 && <p className="error"><strong>Please address information</strong></p>}
                < input type="text" name="email1" className="form-control" placeholder="Enter father's email" ref={register({required:true})} />
                {errors.parents.email1 && <p className="error"><strong>Please address information</strong></p>}
                < input type="text" name="mother" className="form-control" placeholder="Enter mother's name" ref={register({required:true})} />
                {errors.parents.mother && <p className="error"><strong>Please address information</strong></p>}
                < input type="text" name="contact2" className="form-control" placeholder="Enter contact number" ref={register({required:true})} />
                {errors.parents.contact2 && <p className="error"><strong>Please address information</strong></p>}
                < input type="text" name="email2" className="form-control" placeholder="Enter mother's email" ref={register({required:true})} />
                {errors.parents.email2 && <p className="error"><strong>Please address information</strong></p>}
                <label>Level:</label>
                < input type="text" name="level" className="form-control" placeholder="Enter level eg. kinder, jk, sk" ref={register({required:true})} />
                {errors.level && <p className="error"><strong>Please address information</strong></p>}
                <label>Section:</label>
                <input type="text" name="section" className="form-control" placeholder="Enter section eg. alpha, bravo, charlie" ref={register({required:true})}/>
                {errors.section && <p className="error"><strong>Please enter a value for title</strong></p>}
              </div>
              ///TEACHER SECTION
              <div className="form-group">
                <label>Teacher:</label>
                <select className="form-control" name="teacher">
                  <TeachersList teachers={TEACHERS}/>
                </select>
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