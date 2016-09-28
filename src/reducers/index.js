import {
  combineReducers
} from 'redux';
import {
  routerReducer
} from 'react-router-redux';
import courses from './courses';
import comments from './comments';

/* 每个 reducer 仅处理 state 与自己相关部分
 courses 处理 state.courses
 comments 处理 state.comments
 */
const rootReducer = combineReducers({
  courses,
  comments,
  routing: routerReducer
});

export default rootReducer;