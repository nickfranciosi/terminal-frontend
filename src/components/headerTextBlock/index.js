import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import Button from '../button';
import CalloutLink from '../calloutLink';
import styles from './style.module.css';
import SentenceAnimator from '../sentenceAnimator';
import TextAnimate from '../textAnimate';

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
        <TextAnimate triggerOnMount startDelay={550}>{description}</TextAnimate>
      </span>
      <HeadlineElement className={styles.headline}>
        <TextAnimate triggerOnMount startDelay={550}>{headline}</TextAnimate>
      </HeadlineElement>
      <p className={styles.body}>
        <TextAnimate triggerOnMount startDelay={550}>{body}</TextAnimate>
      </p>
      {callout &&
        <div className={styles.calloutContainer}>
          <TextAnimate triggerOnMount startDelay={550}>
            <Button
              to={callout.link}
              style={{
                marginRight: "20px",
              }}
            >
              {callout.text}
            </Button>
          </TextAnimate>
          {secondaryCallout &&
            <TextAnimate triggerOnMount startDelay={550}>
              <a
                href={secondaryCallout.link}
                className={styles.secondaryCallout}
              >
                {secondaryCallout.text}
              </a>
            </TextAnimate>
          }
        </div>
      }
    </div>
  );
}
export default HeaderTextBlock;
