import React from 'react';
import styles from './style.module.css';
import Button from '../button';
import SentenceAnimator from '../sentenceAnimator';
import ScrollAnimate from '../scrollAnimate';

class CenterTextBlock extends React.Component {
  render() {
    const { description, headline, body,  callout, style} = this.props;
    return (
      <div className={styles.container} style={style}>
        <span className={styles.description}>
          <ScrollAnimate  animate={this.props.animate}>{description}</ScrollAnimate>
        </span>
        <h2 className={styles.headline}>
          <ScrollAnimate  animate={this.props.animate}>{headline}</ScrollAnimate>
        </h2>
        {body &&
          <p className={styles.body}>
            <ScrollAnimate  animate={this.props.animate}>{body}</ScrollAnimate>
          </p>
        }
        {callout &&
          <ScrollAnimate animate={this.props.animate}>
            <Button to={callout.link}>{callout.text}</Button>
          </ScrollAnimate>
        }
      </div>
    );
  }
};

export default CenterTextBlock;