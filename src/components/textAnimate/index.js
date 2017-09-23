import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';
import SpanReset from "./spanReset";

class TextAnimate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      animate: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animate: true,
      });
    }, 1000 + this.props.delay)
  }


  render() {
    const innerContainerClass = classNames({
      [styles.container]: true,
      [styles.inner]: true,
      [styles.animate]: this.state.animate,
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

export default TextAnimate;