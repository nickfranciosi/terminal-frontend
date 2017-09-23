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
      animating: false,
      animated: false,
    };

    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    if(this.props.triggerOnMount || this.props.animate) {
      this.animate()
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.animate) {
      this.animate();
    }
  }

  animate() {
    const timeoutTime = 300 + this.props.startDelay;
    setTimeout(() => {
      this.setState({
        animated: true,
      });
    }, timeoutTime)
  }


  render() {
    const innerContainerClass = classNames({
      [styles.container]: true,
      [styles.inner]: true,
      [styles.animate]: this.state.animated,
    });

    return (
      <SpanReset className={styles.container}>
        <SpanReset className={innerContainerClass}>
          {this.props.children}
        </SpanReset>
      </SpanReset>
    )
  }
}

TextAnimate.propTypes = {
  animate: PropTypes.bool.isRequired,
  startDelay: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
  triggerOnMount: PropTypes.bool,
}

TextAnimate.defaultProps = {
  animate: false,
  triggerOnMount: false,
  startDelay: 500,
  delay: 0,
}

export default TextAnimate;