import React from 'react';
import styles from './style.module.css';
import Container from '../container';
import logo from '../../assets/images/LogoMainColor.png';

const Footer = ({  }) => (
  <div className={styles.container}>
    <Container style={{ marginRight: 75 }}>
      <div className={styles.content}>
        <div className={styles.body}>
          <img className={styles.logo} src={logo} />
          <ul className={styles.menu}>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms &amp; Conditions</li>
          </ul>
        </div>
        <div className={styles.locationList}>
          <div className={styles.location}>
            <p>Waterloo</p>
          </div>
          <div className={styles.location}>
            <p>Montreal</p>
          </div>
          <div className={styles.location}>
            <p>Vancouver</p>
          </div>
        </div>
      </div>
      
    </Container>
  </div>
);


export default Footer;