import {
  INCREMENT_LIKES
} from '../actions';
/*
 在组件中各种传递 course state 和 increment actionCreatorDispatch 之后，
 是时候来真正处理数据了
 注意，这里传递过来的 state 只是 state.courses 这一部分，所以默认值是个 []
*/
function courses(state = [], action) {
  switch (action.type) {
    case INCREMENT_LIKES:
      const i = action.index;
      return [
        ...state.slice(0, i), {...state[i],
          likes: state[i].likes + 1
        },
        ...state.slice(i + 1)
      ];
      defaut:
        return state;
  }
  return state;
}

export default courses;