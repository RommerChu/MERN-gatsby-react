import React from 'react';
import { Link } from "gatsby";

import Layout from "../components/layout"

import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
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

        {/*LEFT PANEL*/}
        <div className="col-md-8">
          <SEO title="Home" />
          <h1>Welcome to ABC Academy</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin luctus varius. Aliquam consequat leo fringilla eros imperdiet venenatis. Phasellus sed lectus sed enim consectetur ultricies sit amet quis eros. Morbi venenatis feugiat urna. In malesuada quis ligula non rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur egestas porta elit, sed aliquam arcu consequat quis.</p>
          <button className="btn btn-primary">Learn more</button>
        </div>

        {/*RIGHT PANEL*/}
        <div className="col-md-4">
          <h5>Quick links</h5>
          <Link to="/page-2/">Go to page 2</Link><br/><br/>
          <Link to="/students">Students list</Link><br/>
          <Link to="/addStudents">ADD: Student</Link><br/><br/>
          <Link to="/teachers">Teachers list</Link><br/>



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
