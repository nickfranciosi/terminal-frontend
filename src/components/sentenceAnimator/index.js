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
          triggerOnScoll={this.props.triggerOnScoll}
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
  triggerOnScoll: false,
}

export default SentenceAnimator;