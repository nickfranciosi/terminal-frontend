import React from 'react';
import classNames from 'classnames';
import Waypoint from 'react-waypoint';
import styles from './style.module.css';

class InvestorBlock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      animate: false,
    };

    this.animate = this.animate.bind(this);
  }

  animate() {
    this.setState({
      animate: true,
    })
  }

  render() {
    const containerClass = classNames({
      [styles.container]: true,
      [styles.animate]: this.state.animate,
    });
    return (
      <Waypoint onEnter={this.animate}>
        <div 
          className={containerClass}
        >
          <img 
            src={this.props.icon} 
            alt={this.props.name} 
            className={styles.icon}
            style={{
              width: this.props.size,
              maxWidth: this.props.maxSize,
            }}
          />
        </div>
      </Waypoint>
    );
  }
}


export default InvestorBlock;