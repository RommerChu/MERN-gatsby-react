import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import StudentList from "../components/students/pages/list"


const StudentPage = () => (
  <Layout>
    <SEO title="Students list" />
    <h1>Here you will see the students list</h1>
    {/*<StudentList/>*/}
    <Link to="/">Go back to the homepage</Link>
    <br/>
    <br/>
    <Link to="" className="btn btn-success">Add Student</Link>&nbsp;&nbsp;
    <Link to="" className="btn btn-warning">Edit Student</Link>
  </Layout>
)

export default StudentPage
