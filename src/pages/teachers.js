import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TeacherCard from "../components/teacher/components/teacher_card"

const TeacherPage = () => (
  <Layout>
    <SEO title="Teachers list" />
    <h2>Here you will see the teachers list</h2>
    <Link to="/">Go back to the homepage</Link>
    <br/>
    <br/>
    <TeacherCard/>
      <br/>
      <br/>
    <Link to="/add-teachers" className="btn btn-success px-sm-5 mr-2">Add a Teacher</Link>
    {/*<Link to="/update-students" className="btn btn-primary px-sm-5 mr-2">Update Student</Link>*/}
    {/*<Link to="" className="btn btn-warning px-sm-5 mr-2">Edit Student</Link>*/}
  </Layout>
)

export default TeacherPage
