import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.css';
import SpanReset from "./spanReset";

const ScrollAnimate = ({animate, children}) => {

  const innerContainerClass = classNames({
    [styles.container]: true,
    [styles.inner]: true,
    [styles.animate]: animate,
  });

  return (
    <SpanReset className={styles.container}>
      <SpanReset className={innerContainerClass}>
        {children}
      </SpanReset>
    </SpanReset>
  );
}

ScrollAnimate.propTypes = {
  animate: PropTypes.bool.isRequired,
}

ScrollAnimate.defaultProps = {
  animate: false,
}

export default ScrollAnimate;