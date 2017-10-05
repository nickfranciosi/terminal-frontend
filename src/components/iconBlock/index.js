import React from 'react';
import cn from "classnames";
import Waypoint from 'react-waypoint';
import ScrollAnimate from '../scrollAnimate';
import styles from './style.module.css';

class IconBlock extends React.Component {
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
  render(){
    const { image, headline, description } = this.props;
    const outerClass = cn({
      [styles.outer]: true,
      [styles.animate]: this.state.animate,
    });
    return (
      <Waypoint onEnter={this.animate} offset={650}>
        <div className={outerClass}>
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <div className={styles.iconCircle}>
                <img src={image} alt={headline} />
              </div>
            </div>
            <div className={styles.info}>
              <div>
                <h4>
                  <ScrollAnimate  animate={this.state.animate}>{headline}</ScrollAnimate>
                </h4>
              </div>
              <div>
                <p>
                  <ScrollAnimate  animate={this.state.animate}>{description}</ScrollAnimate>
                </p>
              </div>
            </div>
          </div>
      </div>
    </Waypoint>
    )
  }
}

export default IconBlock;