import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import Button from '../button';
import CalloutLink from '../calloutLink';
import styles from './style.module.css';
import SentenceAnimator from '../sentenceAnimator';

const HeaderTextBlock = ({
  description,
  headline,
  headlineSize,
  body,
  largeBody,
  callout,
  secondaryCallout,
  theme,
  style,
}) => {

  const HeadlineElement = headlineSize || "h1";
  const CalloutElement = theme === "white" ? Button : CalloutLink;
  const containerClasses = classNames({
    [styles.container]: true,
    [styles.whiteTheme]: theme === "white",
    [styles.largeBody]: largeBody,
  });

  const renderButton = () => {
    return theme === "white" ?
     <CalloutLink to={callout.link}>{callout.text}</CalloutLink> :
     <Button to={callout.link}>{callout.text}</Button>
  }

  return (
    <div
      className={containerClasses}
      style={style}
    >
      <span className={styles.description}>
        <SentenceAnimator>{description}</SentenceAnimator>
      </span>
      <HeadlineElement className={styles.headline}>
        <SentenceAnimator>{headline}</SentenceAnimator>
      </HeadlineElement>
      <p className={styles.body}>
        {body}
      </p>
      {callout &&
        <div className={styles.calloutContainer}>
          <Button
            to={callout.link}
            style={{
              marginRight: "20px",
            }}
          >
            {callout.text}
          </Button>
          {secondaryCallout &&
            <a
              href={secondaryCallout.link}
              className={styles.secondaryCallout}
            >
              {secondaryCallout.text}
            </a>
          }
        </div>
      }
    </div>
  );
}
export default HeaderTextBlock;
