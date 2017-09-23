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
        {this.getWords().map((word, i) => <TextAnimate key={`${word}-${i}`} delay={(i + 1) * 45}>{word}&nbsp;</TextAnimate>)}
      </SpanReset>
    )
  }
}

SentenceAnimator.propTypes = {
  children: PropTypes.string.isRequired,
}

SentenceAnimator.defaultProps = {
  children: "",
}

export default SentenceAnimator;