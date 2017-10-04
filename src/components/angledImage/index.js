import React, {PureComponent} from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './style.module.css';

class AngledImage extends PureComponent {
  static propTypes = {
    src: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    src: '',
    style: {},
  };

  componentDidMount() {
    // using css transition instead of @keyframes to animate b/c safari
    // doesn't recalculate 'translations' that were the result of @keyframes
    //
    // updating className instead of state to avoid unnecessary re-render
    setTimeout(() => {
      this.dominic.className += ` ${styles.active}`;
    }, 10);
  }

  render() {
    const {src, style, className} = this.props;

    return (
      <div className={cn(styles.imageOuter, className)} style={style} ref={(d) => {this.dominic = d;}}>
        <div className={styles.image} style={{backgroundImage: `url('${src}')`}} />
      </div>
    );
  }
};

export default AngledImage;
