import React from 'react';
import styles from './style.module.css';
import Button from '../button';

const CenterTextBlock = ({ description, headline, body,  callout, style}) => {
  return (
    <div className={styles.container} style={style}>
      <span className={styles.description}>
        {description}
      </span>
      <h2 className={styles.headline}>
        {headline}
      </h2>
      {body &&
        <p className={styles.body}>
          {body}
        </p>
      }
      {callout &&
        <Button to={callout.link}>{callout.text}</Button>
      }
    </div>
  )
};

export default CenterTextBlock;