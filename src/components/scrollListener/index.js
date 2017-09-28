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
    if(!this.element) {
      this.props.onEnter();
    }
    const elTop = this.element.offsetTop;
    const elBottom = elTop + this.element.elBottom;
    const scrollTop = this.getScrollTop()
    const distanceToTop = elTop - scrollTop;
    
    
    if(distanceToTop < this.props.offset) {
      this.props.onEnter();
      window.removeEventListener('scroll', this.handleScroll);
    }
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