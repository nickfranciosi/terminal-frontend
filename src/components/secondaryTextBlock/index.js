import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import Button from '../button';
import CalloutLink from '../calloutLink';
import styles from './style.module.css';
import SentenceAnimator from '../sentenceAnimator';
import ScrollAnimate from '../scrollAnimate';

const SecondaryTextBlock = ({
  animate,
  description,
  headline,
  headlineSize,
  className,
  hideCallout,
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
    [styles.hideCallout]: hideCallout,
    [className]: true,
  });

  return (
    <div
      className={containerClasses}
      style={style}
    >
      <span className={styles.description}>
        <ScrollAnimate 
          animate={animate}
        >  
          {description}
        </ScrollAnimate>
      </span>
      <HeadlineElement className={styles.headline}>
        <ScrollAnimate 
          animate={animate}
        >  
          {headline}
        </ScrollAnimate>
      </HeadlineElement>
      <div className={styles.heightChecker}>
        <p className={styles.body}>
          <ScrollAnimate 
            animate={animate}
          >  
            {body}
          </ScrollAnimate>
        </p>
        {callout &&
          <div className={styles.calloutContainer}>
            <ScrollAnimate 
              animate={animate}
            >  
              <Button
                to={callout.link}
                external
                style={{
                  marginRight: "20px",
                }}
              >
                {callout.text}
              </Button>
            </ScrollAnimate>
            {secondaryCallout &&
              <ScrollAnimate 
                animate={animate}
              >  
                <a
                  href={secondaryCallout.link}
                  className={styles.secondaryCallout}
                >
                  {secondaryCallout.text}
                </a>
              </ScrollAnimate>
            }
          </div>
        }
      </div>
    </div>
  );
}
export default SecondaryTextBlock;
