import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import styles from "./styles.module.css";

class TabNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pointer: {},
    };

    this.handleResizeEnd = this.handleResizeEnd.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.updatePointer(this.props.index);
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
    this.updatePointer(this.props.index);
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
        pointer: {
          top: 0,
          left: `${label.left - startPoint}px`,
          width: `${label.width}px`,
        },
      });
    }, 20);
  }

  renderTabs() {
    return this.props.tabs.map((tab, index) => (
      <div key={index} id={index} onClick={this.handleClick} style={styles.tab}>
        <Link>
        {tab}
        </Link>
      </div>
    ));
  }

  render() {
    return (
      <div className="TabNavigation" style={styles.container}>
        <div ref={(node) => { this.tabsRef = node; }} style={styles.navContainer}>
          <nav ref={(node) => { this.navRef = node; }} style={styles.nav}>
            {this.renderTabs()}
          </nav>
          <span style={assign({}, styles.pointer, this.state.pointer)} />
        </div>
      </div>
    );
  }
}

TabNavigation.propTypes = {
  index: PropTypes.number,
  tabs: PropTypes.array,
  onChange: PropTypes.func,
};

TabNavigation.defaultProps = {
  index: 0,
};

export default radium(TabNavigation);
