import React, {
  Component
} from 'react';

import Course from './Course';
import CommentBox from './CommentBox';


class ShowCourse extends Component {
  getStyles() {
    return {
      top: {
        backgroundColor: '#00bcd4',
        paddingTop: '3rem',
        paddingBottom: '1rem'
      },
      container: {
        maxWidth: '900px',
        margin: '0 auto'
      }
    };
  }
  render() {
    const styles = this.getStyles();
    const {
      courseId
    } = this.props.params;
    const comments = this.props.comments[courseId];
    const selectedCourse = this.props.courses.filter((c) => c.id === courseId)[0];
    return (
      <div style={styles.top}>
        <div style={styles.container}>
          {/* 和在Courses 中一样，我们把 increment 接力给 Course */}
          <Course comments={comments} increment={this.props.increment} course={selectedCourse}></Course>
          }
        </div>
        <CommentBox courseComments={comments} {...this.props} />
      </div>
    );
  }
}

export default ShowCourse;