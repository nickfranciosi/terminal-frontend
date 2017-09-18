import React from 'react';
import Scroll, { Link } from 'react-scroll'; 
import classNames from 'classnames';
import Sticky from 'react-stickynode';
import styles from './style.module.css';
import Button from '../button';

class SubMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stuck: false,
    }
    this.handleStickyStateChange = this.handleStickyStateChange.bind(this);
  }
  
  handleStickyStateChange = (status) => {
    this.setState({
      stuck: status.status === Sticky.STATUS_FIXED,
    })
  }

  render()  {
    let stickContainerClass = classNames({
      [styles.stickyContainer]: true,
      [styles.active]: this.state.stuck,
    });
    return (
      <Sticky 
        onStateChange={this.handleStickyStateChange}
        className={stickContainerClass}
        innerZ={100}
      >
        <div className={styles.container}>
          <div className={styles.menu}>
            <Link 
              to="overview"
              smooth={true}
              duration={1000}
            >
              Overview
            </Link>
            <Link 
              to="team"
              smooth={true}
              duration={1000}
            >
              Team
            </Link>
          </div>
          <div>
            <Button>Test</Button>
          </div>
        </div>
      </Sticky>
    )
  }
}

export default SubMenu;