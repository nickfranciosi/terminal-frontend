import React from 'react';
import PropTypes from 'prop-types';
import ViewPortView from "../viewPortView";
import CssLogo from "../cssLogo";
import styles from './style.module.css';

class LoadingScreen extends React.Component{
constructor(props) {
  super(props);

  this.state = {
    animateLogo: false,
  }
}

componentDidMount() {
  setTimeout(() => {
    this.setState({
      animateLogo: true,
    })
  }, 1000)
}

render(){
  return (
    <ViewPortView style={{justifyContent: "center"}}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <CssLogo animate={this.state.animateLogo} />
        </div>
        <div className={styles.loadingBar}>
        </div>
      </div>
    </ViewPortView>
  )}
}

export default LoadingScreen;