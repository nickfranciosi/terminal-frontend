import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

class ScrollPosition extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      elTop: null,
      elBottom: null,
      scrollTop: null,
      distanceToTop: null,
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if(!this.element) {
      return;
    }
    const elTop = this.element.offsetTop;
    const elBottom = elTop + this.element.elBottom;
    const scrollTop = this.getScrollTop()
    const distanceToTop = elTop - scrollTop;
    this.setState({
      elTop,
      elBottom,
      scrollTop,
      distanceToTop,
    })
  }

  getScrollTop() {
    if(typeof pageYOffset!= 'undefined'){
        //most browsers except IE before #9
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
    }
  }

  

  render() {
    return (
      <div className={styles.container} ref={(node) => this.element = node} >
        {this.props.children({...this.state})}
      </div>
    )
  }
}

ScrollPosition.propTypes = {
  offset: PropTypes.number.isRequired,
  onEnter: PropTypes.func,
}

ScrollPosition.defaultProps = {
  offset: 100,
}
export default ScrollPosition;