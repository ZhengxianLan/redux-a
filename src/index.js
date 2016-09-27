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

import {
  Provider
} from 'react-redux';
import store, {
  history
} from './store';
import App from './components/App';
import Courses from './components/Courses';
import ShowCourse from './components/ShowCourse';
import css from './styles/style.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Courses}/>
        <Route path="/view/:courseId" component={ShowCourse} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));