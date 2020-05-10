import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StudentCard from "../components/students/components/student_card"

const StudentPage = () => (
  <Layout>
    <SEO title="Students list" />
    <h2>Here you will see the students list</h2>
    {/*<StudentList/>*/}
    <Link to="/">Go back to the homepage</Link>
    <br/>
    <br/>
    <StudentCard/>
    <Link to="/add-students" className="btn btn-success px-sm-5 mr-2">Add Student</Link>
    <Link to="/update-students" className="btn btn-primary px-sm-5 mr-2">Update Student</Link>
    <Link to="" className="btn btn-warning px-sm-5 mr-2">Edit Student</Link>
  </Layout>
)

export default StudentPage
