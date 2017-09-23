import React from 'react';
import Waypoint from 'react-waypoint';
import SentenceAnimator from '../sentenceAnimator';
import styles from './style.module.css';

class SingleHeading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
    };

    this.triggerAnimation = this.triggerAnimation.bind(this);
  }

  triggerAnimation() {
    if(!this.state.animate) {
      this.setState({
        animate: true,
      });
    }
  }

  render() {
    return (
      <Waypoint onEnter={() => this.triggerAnimation()}>
        <div className={styles.container}>
          <h3 className={styles.headline}>
            <SentenceAnimator animate={this.state.animate} startDelay={200}>
              {this.props.children}
            </SentenceAnimator>
          </h3>
        </div>
      </Waypoint>
    );
  }
}

export default SingleHeading;

