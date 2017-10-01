import React from 'react';
import cn from 'classnames';
import styles from './style.module.css';

const AuthorBlock = ({avatar, name, description, className}) => {
  return (
    <div className={cn(styles.author, className)}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <div className={styles.details}>
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AuthorBlock;