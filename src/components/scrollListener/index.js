import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

class ScrollListener extends React.Component {
  constructor(props){
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const elTop = this.element.offsetTop;
    const elBottom = elTop + this.element.elBottom;
    const scrollTop = document.body.scrollTop;
    const distanceToTop = elTop - scrollTop
    console.log(distanceToTop);
    if(distanceToTop <= this.props.offset) {
      this.props.onEnter();
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    return (
      <div className={styles.container} ref={(node) => this.element = node} >
        {this.props.children}
      </div>
    )
  }
}

ScrollListener.propTypes = {
  offset: PropTypes.number.isRequired,
  onEnter: PropTypes.func,
}

ScrollListener.defaultProps = {
  offset: 100,
}
export default ScrollListener;