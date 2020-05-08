import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StudentCreate from "../components/students/pages/create"
import { Route } from "react-router-dom"


const AddStudentPage = () => (
  <Layout>
    <SEO title="Add a student" />
    <h1>Please add a student</h1>
    <Route path="/students/create" exact>
      <StudentCreate/>
    </Route>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AddStudentPage
