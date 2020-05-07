import React from 'react';
import { Link } from "gatsby";

import Layout from "../components/layout"


import Image from '../components/image'
// import Slide1 from "../components/image"
// import Slide2 from "../components/image"
// import Slide3 from "../components/image"


import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import TeacherList from '../components/teacher/pages/list'
import TeacherShow from '../components/teacher/pages/show'
import TeacherCreate from '../components/teacher/pages/create'
import TeacherUpdate from '../components/teacher/pages/update'

import StudentList from '../components/students/pages/list'
import StudentShow from '../components/students/pages/show'
import StudentCreate from '../components/students/pages/create'
import StudentUpdate from '../components/students/pages/update'



const IndexPage = () => {

  return( <Layout>


      <div className="row">
        <div className="col-md-8">
          LEFT COLUMN
          <SEO title="Home" />
          <h1>Welcome to ABC Academy</h1>
          <p>Nourishing your kids for a bright future.</p>
        </div>

        <div className="col-md-4">
          <h1>Image should be here</h1>
          RIGHT COLUMN

          <Router>
          <Switch>

            <Route link="/" exact >
              {/*<Home/>*/}
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
          </Router>
        </div>
      </div>
      {/*<SEO title="Home" />*/}
      {/*<h1>Welcome to ABC Academy</h1>*/}
      {/*<p>Nurishing your kids for a bright future.</p>*/}
      {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
        {/*<Image />*/}
      {/*</div>*/}
      {/*rommer chu*/}
    </Layout>
  )

}





export default IndexPage;
