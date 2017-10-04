import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';
import { Link } from "react-scroll";
import styles from "./style.module.css";

class TabNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pointerId: 0,
      pointer: {},
    };

    this.handleResizeEnd = this.handleResizeEnd.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updatePointer = this.updatePointer.bind(this);
  }

  componentDidMount() {
    this.updatePointer(this.state.pointerId);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillReceiveProps(nextProps) {
    this.updatePointer(nextProps.index);
  }

  componentWillUnmount() {
    clearTimeout(this.resizeTimeout);
    clearTimeout(this.pointerTimeout);
  }


  handleResize() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(this.handleResizeEnd, 50);
  }

  handleResizeEnd() {
    this.updatePointer(this.state.pointerId);
  }

  handleClick(e) {
    const id = parseInt(e.target.id, 10);
    this.props.onChange(id);
  }

  updatePointer(id) {
    clearTimeout(this.pointerTimeout);
    this.pointerTimeout = setTimeout(() => {
      const startPoint = this.tabsRef.getBoundingClientRect().left;
      const label = this.navRef.children[id].getBoundingClientRect();
      this.setState({
        pointerId: id,
        pointer: {
          bottom: 0,
          left: `${label.left - startPoint}px`,
          width: `${label.width}px`,
        },
      });
    }, 20);
  }

  renderTabs() {
    return this.props.tabs.map((tab, index) => (
      <div key={index} id={index} className={styles.tab}>
        <Link 
          smooth={true}
          duration={1000}
          to={tab.link}
          offset={(index > 0) ? -100 : 0}
          spy
          onSetActive={() => this.updatePointer(index)}
        >
          {tab.name}
        </Link>
      </div>
    ));
  }

  render() {
    let pointerClasses = cn({
      [styles.pointer]: true,
      [styles.hidden]: !this.props.showLine,
    });
    let containerClass = cn({
      [styles.navContainer]: true,
      [styles.dark]: this.props.darkTheme,
    })
    return (
      <div
        ref={(node) => { this.tabsRef = node; }}
        className={containerClass}
      >
        <nav
          ref={(node) => { this.navRef = node; }}
          className={styles.nav}
        >
          {this.renderTabs()}
        </nav>
        <span 
          className={pointerClasses}
          style={this.state.pointer} 
        />
      </div>
    );
  }
}

TabNavigation.propTypes = {
  index: PropTypes.number,
  tabs: PropTypes.array,
  onChange: PropTypes.func,
  showLine: PropTypes.bool,
  darkTheme: PropTypes.bool,
};

TabNavigation.defaultProps = {
  index: 0,
};

export default TabNavigation;
