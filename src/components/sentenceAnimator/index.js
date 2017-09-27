import React from 'react';
import PropTypes from 'prop-types';
import TextAnimate from "../textAnimate";
import SpanReset from "../textAnimate/spanReset";

class SentenceAnimator extends React.Component {

  constructor(props) {
    super(props);
  }
  
  getWords() {
    return this.props.children.split(" ");
  }

  render() {

    return (
      <SpanReset>
        {this.getWords().map((word, i) => <TextAnimate
          key={`${word}-${i}`} 
          startDelay={this.props.startDelay}
          delay={(i + 1) * this.props.wordDelay}
          triggerOnMount={this.props.triggerOnMount}
          animate={this.props.animate}
          timingClass={this.props.timingClass}
        >
        {word}&nbsp;
        </TextAnimate>)}
      </SpanReset>
    )
  }
}

SentenceAnimator.propTypes = {
  children: PropTypes.string.isRequired,
  wordDelay: PropTypes.number.isRequired,
  startDelay: PropTypes.number,
  triggerOnScoll: PropTypes.bool,
}

SentenceAnimator.defaultProps = {
  children: "",
  wordDelay: 50,
  startDelay: 300,
  triggerOnMount: false,
}

export default SentenceAnimator;