import React from 'react';
import {
  render
} from 'react-dom';
import {
  browserHistory,
  Router,
  Route,
  IndexRoute
} from 'react-router';


import Main from './components/Main';
import Courses from './components/Courses';
import ShowCourse from './components/ShowCourse';
import css from './styles/style.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Courses}/>
      <Route path="/view/:courseId" component={ShowCourse} />
    </Route>
  </Router>
)

render(router, document.getElementById('root'));