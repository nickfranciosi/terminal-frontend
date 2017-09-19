import React from 'react';
import PropTypes from 'prop-types';
import ViewPortView from "../viewPortView";
import CssLogo from "../cssLogo";
import { Line } from 'react-progressbar.js';
import styles from './style.module.css';

class LoadingScreen extends React.Component{
constructor(props) {
  super(props);

  this.state = {
    animateLogo: false,
    progress: 0.2,
  }

  this.animateLogo = this.animateLogo.bind(this);
  this.startLoading = this.startLoading.bind(this);
  this.stopLoadingBar = this.stopLoadingBar.bind(this);
  this.increaseLoadbar = this.increaseLoadbar.bind(this);
}

componentDidMount() {
  this.startLoading();
}

animateLogo(){
  setTimeout(() => {
    this.setState({
      animateLogo: true,
      progress: 1,
    })
    setTimeout(() => {
      this.props.done();
    }, 1200);
  }, 1000);
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
  this.loadingBarInterval = setInterval(this.increaseLoadbar, 150);
}

componentWillUnmount() {
  this.stopLoadingBar();
}

stopLoadingBar(){
  clearInterval(this.loadingBarInterval);
  this.setState({
    progress: 1,
  })
  this.animateLogo();
}

render(){

  let options = {
    color: '#F43D3D',
    trailColor: '#D8D8D8',  
    strokeWidth: 1,
  }

  var containerStyle = {
    height: '1px'
  };

  return (
    <ViewPortView style={{justifyContent: "center"}}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <CssLogo animate={this.state.animateLogo} />
        </div>
        <div className={styles.loadingBar}>
          <Line 
            progress={this.state.progress}
            initialAnimate
            options={options}
            containerStyle={containerStyle}
            containerClassName={'.progressbar'}
          />
        </div>
      </div>
    </ViewPortView>
  )}
}

export default LoadingScreen;