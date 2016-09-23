import React from 'react';
import Radium from 'radium';

import courses from '../data/courses';

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

    );
  }
}

export default Courses;