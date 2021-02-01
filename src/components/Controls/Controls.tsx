import { FunctionComponent } from 'preact';
// import { css } from '@emotion/react';

import styles from './controls.module.scss';
import Icon from '../Icon';

const Controls: FunctionComponent = () => (
  <div className={styles.controls}>
    <div role="button">
      <Icon name="x" />
    </div>
    <div role="button">
      <Icon name="check" />
    </div>
  </div>
);

export default Controls;