import React, {
  Component
} from 'react';
import Radium, {
  StyleRoot
} from 'radium';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Main extends Component {

  getChildContext() {
    return {
      muiTheme: getMuiTheme()
    };
  }

  render() {
    let styles = {
      root: {
        fontFamily: 'sans-serif'
      },
      header: {
        backgroundColor: '#00bcd4',
        height: '8.4rem',
        width: '100%',
        textAlign: 'center'
      },
      logo: {
        fontWeight: '600',
        fontSize: '3rem',
        letterSpacing: '-1px',
        lineHeight: '8.4rem',
        color: '#fff'
      }
    };
    return (
      <StyleRoot style={styles.root}>
        <header style={styles.header}>
          <div style={styles.logo}>阿姨洗铁路</div>
        </header>
        
        {
          /* 然而，Main 组件并不需要这些 state,dispatch,
              那就传递给子组件
           */
          React.cloneElement(this.props.children,this.props )
        }
      </StyleRoot>
    );
  }
}

Main.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default Radium(Main);