import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Waypoint from 'react-waypoint';
import styles from './styles.module.css';
import SpanReset from "./spanReset";

class TextAnimate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      animate: false,
    };

    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    if(!this.props.triggerOnScroll) {
      this.animate();
    }
  }

  animate() {
    setTimeout(() => {
      this.setState({
        animate: true,
      });
    }, this.props.startDelay + this.props.delay)
  }


  render() {
    const innerContainerClass = classNames({
      [styles.container]: true,
      [styles.inner]: true,
      [styles.animate]: this.state.animate,
    });

    return (
      <Waypoint onEnter={this.animate}>
        <SpanReset className={styles.container}>
          <SpanReset className={innerContainerClass}>
            {this.props.children}
          </SpanReset>
        </SpanReset>
      </Waypoint>
    )
  }
}

TextAnimate.propTypes = {
  startDelay: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
  triggerOnScroll: PropTypes.bool,
}

TextAnimate.defaultProps = {
  triggerOnScroll: true,
  startDelay: 1000,
  delay: 0,
}

export default TextAnimate;