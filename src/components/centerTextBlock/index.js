import React from 'react';
import Waypoint from 'react-waypoint';
import styles from './style.module.css';
import Button from '../button';
import SentenceAnimator from '../sentenceAnimator';
import TextAnimate from '../textAnimate';

class CenterTextBlock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      animate: false,
    };

    this.triggerAnimation = this.triggerAnimation.bind(this);
  }

  triggerAnimation() {
    console.log("animate center");
    if(!this.state.animate) {
      this.setState({
        animate: true,
      });
    }
  }

  render() {
    const { description, headline, body,  callout, style} = this.props;
    return (
      <Waypoint onEnter={() => this.triggerAnimation()} topOffset={500}>
        <div className={styles.container} style={style}>
          <span className={styles.description}>
            <SentenceAnimator  animate={this.state.animate} startDelay={200}>{description}</SentenceAnimator>
          </span>
          <h2 className={styles.headline}>
            <SentenceAnimator  animate={this.state.animate} startDelay={200}>{headline}</SentenceAnimator>
          </h2>
          {body &&
            <p className={styles.body}>
              <TextAnimate  animate={this.state.animate} startDelay={200}>{body}</TextAnimate>
            </p>
          }
          {callout &&
            <TextAnimate animate={this.state.animate} startDelay={200}>
              <Button to={callout.link}>{callout.text}</Button>
            </TextAnimate>
          }
        </div>
      </Waypoint>
    );
  }
};

export default CenterTextBlock;