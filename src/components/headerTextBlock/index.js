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
  className,
  body,
  largeBody,
  callout,
  secondaryCallout,
  theme,
  style,
}) => {

  const HeadlineElement = headlineSize || "h1";
  
  const containerClasses = classNames({
    [styles.container]: true,
    [styles.whiteTheme]: theme === "white",
    [styles.largeBody]: largeBody,
    [className]: true,
  });

  return (
    <div
      className={containerClasses}
      style={style}
    >
      <span className={styles.description}>
        <TextAnimate 
          triggerOnMount
          startDelay={0}
          timingClass={styles.first}
        >  
          {description}
        </TextAnimate>
      </span>
      <HeadlineElement className={styles.headline}>
        <SentenceAnimator 
          triggerOnMount
          startDelay={0}
          timingClass={styles.second}
        >  
          {headline}
        </SentenceAnimator>
      </HeadlineElement>
      <div className={styles.heightChecker}>
        <p className={styles.body}>
          {body}
        </p>
        {callout &&
          <div className={styles.calloutContainer}>
            <TextAnimate 
              triggerOnMount
              startDelay={0}
              timingClass={styles.third}
            >  
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
              <TextAnimate 
                triggerOnMount
                startDelay={0}
                timingClass={styles.third}
              >  
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
    </div>
  );
}
export default HeaderTextBlock;
