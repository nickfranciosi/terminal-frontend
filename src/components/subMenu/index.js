import React from 'react';
import Scroll, { Link, animateScroll } from 'react-scroll'; 
import classNames from 'classnames';
import Sticky from 'react-stickynode';
import styles from './style.module.css';
import Button from '../button';
import TabNavigation from '../tabNavigation';
import upLogo from '../../assets/images/upLogo.png';

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
        <img 
          src={upLogo}
          className={styles.logo}
          onClick={animateScroll.scrollToTop}
        />
        <div className={styles.container}>
          <div className={styles.menu}>
            <TabNavigation 
              showLine={this.state.stuck}
              tabs={[
                {name: "Overview", link: "overview"}, 
                {name: "Team", link: "team"},
              ]}
            />
          </div>
          <div className={styles.callout}>
            <Button>Request an appointment</Button>
          </div>
        </div>
      </Sticky>
    )
  }
}

export default SubMenu;