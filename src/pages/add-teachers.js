import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CreateTeacher from '../components/teacher/pages/create'


const AddTeacherPage = () => (
  <Layout>
    <SEO title="Add a teacher" />
    <CreateTeacher/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AddTeacherPage
