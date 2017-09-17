import React from 'react';
import styles from './style.module.css';

const InvestorBlock = ({name, icon}) => (
  <div 
    className={styles.container}
  >
   <img src={icon} alt={name} className={styles.icon}/>
  </div>
);


export default InvestorBlock;