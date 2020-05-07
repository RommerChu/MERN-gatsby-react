import React from 'react';
import { Link } from "gatsby";

import Layout from "../components/layout"
import Image from "../components/images"
import Slide1 from "../components/image"
import Slide2 from "../components/image"
import Slide3 from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import {Route, Switch} from 'react-router-dom'

import TeacherList from '../components/teacher/pages/list'
import TeacherShow from '../components/teacher/pages/show'
import TeacherCreate from '../components/teacher/pages/create'
import TeacherUpdate from '../components/teacher/pages/update'

import StudentList from '../components/students/pages/list'
import StudentShow from '../components/students/pages/show'
import StudentCreate from '../components/students/pages/create'
import StudentUpdate from '../components/students/pages/update'



const IndexPage = () => (
  <Layout>
    <Carousel>
      <Carousel.Item>
        {/*<img*/}
        {/*  className="d-block w-100"*/}
        {/*  src="../images/slide1.jpg"*/}
        {/*  alt="First slide"*/}
        {/*/>*/}
        <Slide1 />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/*<img*/}
        {/*  className="d-block w-100"*/}
        {/*  src="../images/slide2.jpg"*/}
        {/*  alt="Third slide"*/}
        {/*/>*/}
          <Slide2 />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/*<img*/}
        {/*  className="d-block w-100"*/}
        {/*  src="../images/slide3.jpg"*/}
        {/*  alt="Third slide"*/}
        {/*/>*/}
          <Slide3 />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="row">
        <div className="col-md-8">
          LEFT COLUMN
          <SEO title="Home" />
          <h1>Welcome to ABC Academy</h1>
          <p>Nourishing your kids for a bright future.</p>
        </div>

        <div className="col-md-4">
          <Image />
          RIGHT COLUMN
          <Switch>

            <Route link="/" exact >
              <Home/>
            </Route>

            <Route path="/students/" exact>
              <StudentList/>
            </Route>

            <Route path="/students/create" exact>
              <StudentCreate/>
            </Route>

            <Route path="/students/:id/show" exact >
              <StudentShow/>
            </Route>

            <Route path="/student/update/:id" exact>
              <StudentUpdate/>
            </Route>

            <Route path="/teacher" component={TeacherList} exact/>
            <Route path="/teacher/:id/show" component={TeacherShow} exact/>
            <Route path="/teacher/create" component={TeacherCreate} exact/>
            <Route path="/teacher/update/:id" component={TeacherUpdate} exact/>

          </Switch>
        </div>
    </div>
    {/*<SEO title="Home" />*/}
    {/*<h1>Welcome to ABC Academy</h1>*/}
    {/*<p>Nurishing your kids for a bright future.</p>*/}
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
    {/*  <Image />*/}
    {/*</div>*/}
  </Layout>
)

export default IndexPage;
