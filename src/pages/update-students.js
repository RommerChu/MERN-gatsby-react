import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import UpdateStudent from '../components/students/pages/update'


const UpdateStudents = () => (
  <Layout>
    <SEO title="UPDATE A STUDENT" />
    <UpdateStudent/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UpdateStudents
