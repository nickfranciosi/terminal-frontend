import React from 'react';
import Waypoint from 'react-waypoint';
import styles from './style.module.css';
import Button from '../button';
import SentenceAnimator from '../sentenceAnimator';
import TextAnimate from '../textAnimate';

class CenterTextBlock extends React.Component {
  render() {
    const { description, headline, body,  callout, style} = this.props;
    return (
      <div className={styles.container} style={style}>
        <span className={styles.description}>
          <TextAnimate  animate={this.props.animate} startDelay={200}>{description}</TextAnimate>
        </span>
        <h2 className={styles.headline}>
          <TextAnimate  animate={this.props.animate} startDelay={200}>{headline}</TextAnimate>
        </h2>
        {body &&
          <p className={styles.body}>
            <TextAnimate  animate={this.props.animate} startDelay={200}>{body}</TextAnimate>
          </p>
        }
        {callout &&
          <TextAnimate animate={this.props.animate} startDelay={200}>
            <Button to={callout.link}>{callout.text}</Button>
          </TextAnimate>
        }
      </div>
    );
  }
};

export default CenterTextBlock;