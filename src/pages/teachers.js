import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TeacherPage = () => (
  <Layout>
    <SEO title="Teachers list" />
    <h1>Here you will see the teachers list</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TeacherPage
