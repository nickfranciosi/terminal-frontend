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
          <Link to="/"><img className={styles.logo} src={logo} /></Link>
          <ul className={styles.menu}>
            <li><a href="/manifesto">Twitter</a></li>
            <li><a href="/manifesto">Medium</a></li>
            <li><a href="/manifesto">Linkedin</a></li>
            <li><a href="/manifesto">Instagram</a></li>
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
      <div className={styles.mobileLogo}>
        <Link to="/"><img className={styles.logo} src={logo} /></Link>
      </div>
    </Container>
  </div>
);


export default Footer;
