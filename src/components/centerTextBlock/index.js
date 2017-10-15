import React from 'react';
import classNames from 'classnames';
import styles from './style.module.css';
import Button from '../button';
import ScrollAnimate from '../scrollAnimate';

class CenterTextBlock extends React.Component {
  render() {
    const { description, headline, body,  callout, className, style} = this.props;
    return (
      <div className={classNames(styles.container, className)} style={style}>
        <span className={styles.description}>
          <ScrollAnimate  animate={this.props.animate}>{description}</ScrollAnimate>
        </span>
        <h2 className={styles.headline}>
          <ScrollAnimate  animate={this.props.animate}>
            <div dangerouslySetInnerHTML={{__html: headline}}/>
          </ScrollAnimate>
        </h2>
        {body &&
          <p className={styles.body}>
            <ScrollAnimate  animate={this.props.animate}>{body}</ScrollAnimate>
          </p>
        }
        {callout &&
          <ScrollAnimate animate={this.props.animate}>
            <Button to={callout.link}>{callout.text}</Button>
          </ScrollAnimate>
        }
      </div>
    );
  }
};

export default CenterTextBlock;