import {
  bindActionCreators
} from 'redux';
import {
  connect
} from 'react-redux';
import * as ActionCreators from '../actions/index';
import Main from './Main';


/* 将 state 映射到组件的 props 上
我们并未看到显式的 store.subscribe(reacct.xxreander)，
因为 mapsStateToProps 会订阅 Store，每当state更新的时候，就会自动执行
[React-Redux 的用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)
 */
function mapStateToProps(state) {
  console.log('execute mapStateToProps');
  return {
    courses: state.courses,
    comments: state.comments
  }
}

/*将 actionCreator 包装成一旦 actionCreator 返回 action,
立即调用 diaptch(action) 的函数，并映射到组件的 props 上，
函数名与原来的 actionCreator 同名
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

/* 现在我们把 state，dispatch 都映射到 Main 组件的 props
connect方法可以省略mapStateToProps参数，那样的话，UI 组件就不会订阅Store，就是说 Store 的更新不会引起 UI 组件的更新
 */
const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;