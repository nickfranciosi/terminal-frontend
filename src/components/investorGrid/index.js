import React from 'react';
import PropTypes from 'prop-types';
import InvestorBlock from "../investorBlock";
import styles from './style.module.css';

const InvestorGrid = ({ investors = [] }) => (
  <div className={styles.container}>
    {investors.map((i) => <InvestorBlock {...i} key={i.name} />)}
  </div>
);

InvestorGrid.propTypes = {
  investors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
  })).isRequired,
}

export default InvestorGrid;