import React from 'react';
import PropTypes from 'prop-types';
import InvestorBlock from "../investorBlock";
import styles from './style.module.css';
import Reveal from 'react-reveal';

const InvestorGrid = ({ investors = [] }) => (
  <div className={styles.container}>
    {investors.map((i, index) => 
      <Reveal 
        key={i.name} 
        throttleTimeout={(index + 1) * 100}
        effect="animated fadeInUp"
      >
        <InvestorBlock {...i}  />
      </Reveal>
    )}
  </div>
);

InvestorGrid.propTypes = {
  investors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
  })).isRequired,
}

export default InvestorGrid;