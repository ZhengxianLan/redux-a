import {
  combineReducers
} from 'redux';
import {
  routerReducer
} from 'react-router-redux';
import courses from './courses';
import comments fro, './comments';


const rootReducer = combineReducers({
  courses,
  comments,
  routing: routerReducer
});

export default rootReducer;