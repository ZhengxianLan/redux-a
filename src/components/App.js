import {
  bindActionCreators
} from 'redux';
import {
  connect
} from 'react-redux';
import * as ActionCreators from '../actions/index';
import Main from './Main';

function mapStateToProps(state) {
  return {
    courses: state.courses,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;