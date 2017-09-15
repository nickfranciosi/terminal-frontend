import React from 'react';
import PropTypes from 'prop-types';
import Link from "gatsby-link"
import styles from './style.module.css';

const CalloutLink = ({ children, to, style }) => (
  <Link 
    className={styles.callout}
    style={style}
    to={to}
  >
    {children}
  </Link>
);

CalloutLink.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  styles: PropTypes.obj,
};

export default CalloutLink;