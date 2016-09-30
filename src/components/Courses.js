import React from 'react';
import Radium from 'radium';

import courses from '../data/courses';
import Course from './Course';

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Courses';
  }
  render() {
    let styles = {
      root: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        display: 'flex',
        flexWrap: 'wrap'
      }
    };
    return (
      <div style={styles.root}>
        {
          /* 将从 Main 组件获取到的 state 中的 courses 传递给 Course 子组件
            并将从 Main 组件获取到的 increment 这个 actionCreatorDispatch 传递给 Course 子组件
          */
          this.props.courses.map((course,i) => <Course comments={this.props.comments[course.id]} increment={this.props.increment} key={i} course={course}/>)
        }
      </div>
    );
  }
}

export default Radium(Courses);