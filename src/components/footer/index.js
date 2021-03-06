import React from 'react';
import cn from 'classnames';
import styles from './style.module.css';
import Link from "gatsby-link";
import Container from '../container';
import logoMain from '../../assets/images/Terminal-logo.svg';
import logoWhite from '../../assets/images/logoWhite.svg';

const Footer = ({ darkTheme }) => {
  const logo = darkTheme ? logoWhite : logoMain
  const containerStyles = cn({
    [styles.container]: true,
    [styles.dark]: darkTheme,
  })
  return (
    <div className={containerStyles}>
      <Container>
        <div className={styles.content}>
          <div className={styles.body}>
            <Link to="/"><img className={styles.logo} src={logo} /></Link>
            <ul className={styles.menu}>
              <li><a target="_blank" href="http://twitter.com/jointerminal">Twitter</a></li>
              <li><a target="_blank" href="http://medium.com/@terminal">Medium</a></li>
              <li><a target="_blank" href="https://www.linkedin.com/company/17986001/">Linkedin</a></li>
              <li><a target="_blank" href="http://instagram.com/jointerminal">Instagram</a></li>
            </ul>
          </div>
          <div className={styles.locationList}>
            <div className={styles.location}>
              <p>Kitchener-Waterloo</p>
              <p>119 King Street W</p>
              <p>Ontario, Canada</p>
            </div>
            <div className={styles.location}>
              <p>Montreal</p>
              <p>486 Rue Sainte Catherine</p>
              <p>Quebec, Canada</p>
            </div>
            <div className={styles.location}>
              <p>Vancouver</p>
              <p>1110 Hamilton St - Suite 208</p>
              <p>BC, Canada</p>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy;Terminal 2018</p>
          <ul className={styles.menu}>
            <li><a target="_blank" href="https://jobs.lever.co/terminal?team=Terminal">Careers at Terminal</a></li>
            <li>
              <a 
                onClick={(e) => {
                  e.preventDefault();
                  window.scroll(0,0);
                }}
              >
                Back To Top
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.mobileLogo}>
          <Link to="/"><img className={styles.logo} src={logo} /></Link>
          <ul className={styles.menu}>
              <li><a target="_blank" href="http://twitter.com/jointerminal">Twitter</a></li>
              <li><a target="_blank" href="http://medium.com/@terminal">Medium</a></li>
              <li><a target="_blank" href="https://www.linkedin.com/company/17986001/">Linkedin</a></li>
              <li><a target="_blank" href="http://instagram.com/jointerminal">Instagram</a></li>
          </ul>
        </div>
      </Container>
    </div>
  );
}


export default Footer;
