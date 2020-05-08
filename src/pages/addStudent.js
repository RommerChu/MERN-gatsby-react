import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const AddStudentPage = () => (
  <Layout>
    <SEO title="Add a student" />
    <h1>Please add a student</h1>
    <form method="post" action="#">
      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AddStudentPage
