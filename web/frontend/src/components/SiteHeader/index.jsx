import React from 'react';
import classNames from 'classnames';
import styles from './style.styl';

const SiteHeader = () => (
  <header className={classNames(styles.siteHeader, 'content')}>
    <h4>
      Jack Toumey
    </h4>
  </header>
);

export default SiteHeader;
