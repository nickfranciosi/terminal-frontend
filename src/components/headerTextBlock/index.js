import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import Button from '../button';
import CalloutLink from '../calloutLink';
import styles from './style.module.css';

const HeaderTextBlock = ({ 
  description,
  headline,
  headlineSize,
  body,
  callout,
  theme,
  style,
}) => {

  const HeadlineElement = headlineSize || "h1";
  const CalloutElement = theme === "white" ? Button : CalloutLink;
  const containerClasses = classNames({
    [styles.container]: true,
    [styles.whiteTheme]: theme === "white",
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
        {description}
      </span>
      <HeadlineElement className={styles.headline}>
        {headline}
      </HeadlineElement>
      <p className={styles.body}>
        {body}
      </p>
      {callout && renderButton()}
    </div>
  );
}
export default HeaderTextBlock;