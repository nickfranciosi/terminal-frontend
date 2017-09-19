import React from 'react';
import styles from './style.module.css';
import Link from "gatsby-link";
import Container from '../container';
import logo from '../../assets/images/LogoMainColor.png';

const Footer = ({  }) => (
  <div className={styles.container}>
    <Container>
      <div className={styles.content}>
        <div className={styles.body}>
          <img className={styles.logo} src={logo} />
          <ul className={styles.menu}>
            <li><Link activeClassName={styles.currentLink} to="/about">About</Link></li>
            <li><Link activeClassName={styles.currentLink} to="/manifesto">Privacy Policy</Link></li>
            <li><Link activeClassName={styles.currentLink}to="/manifesto">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
        <div className={styles.locationList}>
          <div className={styles.location}>
            <p>Waterloo</p>
            <p>123 First Street</p>
            <p>Ontario, Canada</p>
          </div>
          <div className={styles.location}>
            <p>Montreal</p>
            <p>123 First Street</p>
            <p>Quebec, Canada</p>
          </div>
          <div className={styles.location}>
            <p>Vancouver</p>
            <p>123 First Street</p>
            <p>BC, Canada</p>
          </div>
        </div>
      </div>
      
    </Container>
  </div>
);


export default Footer;