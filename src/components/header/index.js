import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Link from 'gatsby-link';
import styles from './style.module.css';
import logoMain from '../../assets/images/Terminal-logo.svg';
import logoWhite from '../../assets/images/logoWhite.svg';
import TextAnimate from '../textAnimate';
import Container from '../container';

const Header = ({ darkTheme, darkMenu }) => (
  <Container className={styles.outerContainersss}>
      <div className={styles.containersss}>
        <Link 
          to="/"
          className={styles.link}
        >
          <TextAnimate
            triggerOnMount
            startDelay={0}
            timingClass={styles.first}
          >
            <img className={styles.image} src={darkTheme ? logoWhite : logoMain} />
          </TextAnimate>
        </Link>
        <div className={cn(styles.menu, darkMenu && styles.darkMenu)}>
          <Link  className={styles.mainLink} exact activeClassName={styles.active}to="/">Partner</Link>
          <Link className={styles.mainLink} activeClassName={styles.active} to="/join">Join</Link>
          <Link className={styles.subLink} activeClassName={styles.active} to="/about">About</Link>
          <Link className={styles.subLink} activeClassName={styles.active} to="/locations">Locations</Link>
        </div>
      </div>
  </Container>
);

export default Header;

