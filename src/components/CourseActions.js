import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router';
import ActionThumpUp from 'material-ui/svg-icons/action/thumb-up';
import CommunicationComment from 'material-ui/svg-icons/communication/comment';
import Radium from 'radium';

class CourseActions extends Component {

  getStyles() {
    return {
      root: {
        borderTop: '1px solid #e2e2e2',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 600px)': {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      },
      name: {
        color: '#4c5765',
        fontSize: '1.7rem',
        marginBottom: '20px',
        textAlign: 'center',
        '@media (min-width: 600px)': {
          marginBottom: 0
        }
      },
      btnWrap: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      a: {
        display: 'block',
        marginLeft: '10px',
        textDecoration: 'none'
      },
      button: {
        backgoundColor: '#f2f4f6',
        color: '#4c5765',
        height: '36px',
        minWidth: '80px',
        border: 'none',
        padding: '3px 6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ':hover': {
          cursor: 'pointer'
        },
        ':focus': {
          outline: 'none'
        }
      },
      icon: {
        width: '18px',
        height: '18px',
        paddingRight: '6px'
      }
    };
  }

  render() {
    const {
      course
    } = this.props;
    let styles = this.getStyles();

    return (
      <div style={ styles.root }>
        <div style={ styles.name }>{ course.name }</div>
        <div style={ styles.btnWrap }>
          <button style={ styles.button} onClick={this.props.increment} key='1'>
           <ActionThumpUp style={ styles.icon } color='#4c5765'></ActionThumpUp>
           <div>{this.props.likes}</div>
          </button>
          <Link style={ styles.a } to={`/views/${course.id}`}>
              <button style={ styles.button } key='2'>
              <CommunicationComment style={ styles.icon}> </CommunicationComment>
              <div>0</div>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Radium(CourseActions);