import React from 'react';
import { Link } from "gatsby";

import Layout from "../components/layout"
import Layout2 from "../components/layout2"
import BackgroundImage from "gatsby-background-image"
import {graphql} from "gatsby"
import "../components/CSS/Background-Image.css"

import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import TeacherList from '../components/teacher/pages/list'
import TeacherShow from '../components/teacher/pages/show'
import TeacherCreate from '../components/teacher/pages/create'
import TeacherUpdate from '../components/teacher/pages/update'
// import deleteTeacher from '../components/teacher/pages/delete'

import StudentList from '../components/students/pages/list'
import StudentShow from '../components/students/pages/show'
import StudentCreate from '../components/students/pages/create'
import StudentUpdate from '../components/students/pages/update'
// import StudentDelete from '../components/students/pages/delete'
import { Container, Row } from "react-bootstrap"
import Footer from "../components/footer"



const IndexPage = (props) => {

  return(
    <Router>


    <BackgroundImage
        className="mast-head"
        fluid={props.data.indexImage.childImageSharp.fluid}
      >
        <Layout>

      <Container>


        <SEO title="Home" />
        <h1>Welcome to ABC Academy</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin luctus varius. Aliquam consequat leo fringilla eros imperdiet venenatis. Phasellus sed lectus sed enim consectetur ultricies sit amet quis eros. Morbi venenatis feugiat urna. In malesuada quis ligula non rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur egestas porta elit, sed aliquam arcu consequat quis.</p>
        <button className="btn btn-primary">Learn more</button>

      </Container>
      {/*<br/>*/}

        {/*  <Row>*/}
        {/*  <h5>Quick links: </h5>&nbsp;&nbsp;*/}
        {/*  <Link to="/page-2/" className="qlink"><h5>Go to page 2</h5></Link>&nbsp;&nbsp;*/}
        {/*  <Link to="/students" className="qlink"><h5>Students list</h5></Link><br/>*/}
        {/*  <Link to="/add-students" className="qlink"><h5>ADD: Student</h5></Link><br/><br/>*/}
        {/*  <Link to="/update-students" className="qlink"><h5>Update: Student</h5></Link><br/><br/>*/}
        {/*  <Link to="/teachers" className="qlink"><h5>Teachers list</h5></Link><br/>*/}
        {/*</Row>*/}

        <Row>
          <Switch>
            <Route link="/" exact >{/*<Home/>*/}</Route>
            <Route path="/students/" exact><StudentList/></Route>
            <Route path="/students/create" exact><StudentCreate/></Route>
            <Route path="/students/:id/show" exact ><StudentShow/></Route>
            <Route path="/student/update/:id" exact><StudentUpdate/></Route>
            <Route path="/student/delete/:id" exact>StudentDelete</Route>
            {/*<Route path="/teacher" component={deleteTeacher} exact/>*/}

            <Route path="/teachers" component={TeacherList} exact/><TeacherList/>
            <Route path="/teachers/:id/show" component={TeacherShow} exact/>
            <Route path="/teachers/create" component={TeacherCreate} exact/>
            <Route path="/teachers/update/:id" component={TeacherUpdate} exact/>
            {/*<Route path="/teachers/delete/:id" component={TeacherDelete} exact></Route>*/}
            {/*<Route path="`http://localhost:8000/api/students/${student_id}" component={deleteTeacher} exact/>*/}
          </Switch>
        </Row>
        </Layout>
        <Layout2></Layout2>
        <Footer/>
    </BackgroundImage>

    </Router>

  )
}


export default IndexPage;

export const pageQuery = graphql`
  query {
     indexImage: file(relativePath: {eq: "slide5.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1920, quality:100){
            ...GatsbyImageSharpFluid 
          }
        }
     }
  }
`;
