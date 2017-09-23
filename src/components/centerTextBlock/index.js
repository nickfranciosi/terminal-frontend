import React from 'react';
import styles from './style.module.css';
import Button from '../button';
import SentenceAnimator from '../sentenceAnimator';
import TextAnimate from '../textAnimate';

const CenterTextBlock = ({ description, headline, body,  callout, style}) => {
  return (
    <div className={styles.container} style={style}>
      <span className={styles.description}>
        <SentenceAnimator triggerOnScroll startDelay={200}>{description}</SentenceAnimator>
      </span>
      <h2 className={styles.headline}>
        <SentenceAnimator triggerOnScroll startDelay={300}>{headline}</SentenceAnimator>
      </h2>
      {body &&
        <p className={styles.body}>
          <TextAnimate triggerOnScroll startDelay={400}>{body}</TextAnimate>
        </p>
      }
      {callout &&
        <TextAnimate triggerOnScroll startDelay={500}>
          <Button to={callout.link}>{callout.text}</Button>
        </TextAnimate>
      }
    </div>
  )
};

export default CenterTextBlock;