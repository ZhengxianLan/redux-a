import {
  createStore,
  compose
} from 'redux';
import {
  syncHistoryWithStore
} from 'react-router-redux';
import {
  browserHistory
} from 'react-router';

import rootReducer from './reducers/index';
import comments from './data/comments';
import courses from './data/courses';

const defaultState = {
  courses: courses,
  comments: comments
}
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export const history = syncHistoryWithStore(browserHistory, store);
const store = createStore(rootReducer, defaultState);
export default store;