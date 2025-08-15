import React from 'react';

import Icon from '../Icons/Icon';

import * as styles from './RemoveItem.module.css';

const RemoveItem = (props) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      props.onClick?.(e);
    }
  };
  return (
    <div
      className={styles.root}
      onClick={props.onClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Remove item"
    >
      <Icon symbol={'cross'} />
    </div>
  );
};

export default RemoveItem;
