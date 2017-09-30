import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Viewport from '../viewport';
import CssLogo from "../cssLogo";
import { Line } from 'react-progressbar.js';
import styles from './style.module.css';

class LoadingScreen extends React.Component{
constructor(props) {
  super(props);

  this.state = {
    animateLogo: false,
    progress: 0.0,
    done: false,
  }

  this.animateLogo = this.animateLogo.bind(this);
  this.startLoading = this.startLoading.bind(this);
  this.stopLoadingBar = this.stopLoadingBar.bind(this);
  this.increaseLoadbar = this.increaseLoadbar.bind(this);
}

componentDidMount() {
  this.startLoading();
  this.animateLogo();
}

animateLogo(){
  setTimeout(() => {
    this.setState({
      animateLogo: true,
    });
  }, 50);
}

increaseLoadbar(){
  if(this.state.progress <= 1) {
    this.setState({
      progress: this.state.progress + 0.1,
    })
  }else{
    this.stopLoadingBar();
  }
}

startLoading() {
  this.loadingBarInterval = setInterval(this.increaseLoadbar, 5);
}

componentWillUnmount() {
  this.stopLoadingBar();
}

stopLoadingBar(){
  clearInterval(this.loadingBarInterval);
  this.setState({
    progress: 1,
    // done: true,
  }, () => {
    setTimeout(() => {
      this.setState({
        done: true,
      })
      this.props.done();
    }, 500)
  })
}

render(){

  let options = {
    color: '#FF4343',
    trailColor: '#D8D8D8',
    strokeWidth: 1,
  }

  var containerStyle = {
    height: '1px'
  };

  const containerClass = classNames({
    [styles.container]: true,
    [styles.done]: this.state.done,
  });

  return (
    <Viewport style={{justifyContent: "center"}}>
      <div className={containerClass}>
        <div className={styles.icon}>
          <CssLogo animate={this.state.animateLogo} />
        </div>
        <div className={styles.loadingBar}>
          <Line
            progress={this.state.progress}
            initialAnimate
            options={options}
            containerStyle={containerStyle}
            containerClassName={'progressbar'}
          />
        </div>
      </div>
    </Viewport>
  )}
}

export default LoadingScreen;
