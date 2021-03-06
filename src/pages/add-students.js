import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CreateStudent from '../components/students/pages/create'


const AddStudentPage = () => (
  <Layout>
    <SEO title="Add a student" />
    <CreateStudent/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AddStudentPage
