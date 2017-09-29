import React from 'react';
import cn from "classnames";
import Waypoint from 'react-waypoint';
import ScrollAnimate from '../scrollAnimate';
import styles from './style.module.css';

// const BioBlock = ({ image, name, bio }) => (
//   <div className={styles.outer}>
//     <div className={styles.container}>
//       <img src={image} alt={name} />
//       <div className={styles.info}>
//         <div>
//           <h4>{name}</h4>
//         </div>
//         <div>
//           <p>{bio}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// );

class BioBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
    };

    this.animate = this.animate.bind(this);
  }

  animate() {
    this.setState({
      animate: true,
    })
  }
  render(){
    const { image, name, bio } = this.props;
    const outerClass = cn({
      [styles.outer]: true,
      [styles.animate]: this.state.animate,
    });
    return (
      <Waypoint onEnter={this.animate} offset={650}>
        <div className={outerClass}>
          <div className={styles.container}>
            <img src={image} alt={name} />
            <div className={styles.info}>
              <div>
                <h4>
                  <ScrollAnimate  animate={this.state.animate}>{name}</ScrollAnimate>
                </h4>
              </div>
              <div>
                <p>
                  <ScrollAnimate  animate={this.state.animate}>{bio}</ScrollAnimate>
                </p>
              </div>
            </div>
          </div>
      </div>
    </Waypoint>
    )
  }
}

export default BioBlock;