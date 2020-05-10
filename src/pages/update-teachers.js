import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import UpdateTeacher from '../components/teacher/pages/update'


const UpdateTeacherRec = () => (
  <Layout>
    <SEO title="Add a teacher" />
    <UpdateTeacher/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UpdateTeacherRec
