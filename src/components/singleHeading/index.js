import React from 'react';
import ScrollListener from '../scrollListener';
import ScrollAnimate from '../scrollAnimate';
import styles from './style.module.css';

class SingleHeading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
    };

    this.triggerAnimation = this.triggerAnimation.bind(this);
  }

  triggerAnimation() {
    if(!this.state.animate) {
      this.setState({
        animate: true,
      });
    }
  }

  render() {
    return (
      <ScrollListener onEnter={() => this.triggerAnimation()} offset={650}>
        <div className={styles.container}>
          <h3 className={styles.headline}>
            <ScrollAnimate animate={this.state.animate} >
              {this.props.children}
            </ScrollAnimate>
          </h3>
        </div>
      </ScrollListener>
    );
  }
}

export default SingleHeading;

