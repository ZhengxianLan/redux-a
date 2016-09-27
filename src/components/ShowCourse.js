import React, {
  Component
} from 'react';

import Course from './Course';


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
    const selectedCourse = this.props.courses.filter((c) => c.id === courseId)[0];
    return (
      <div style={styles.top}>
        <div style={styles.container}>
          <Course course={selectedCourse}></Course>
        </div>
      </div>
    );
  }
}

export default ShowCourse;