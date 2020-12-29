import React from 'react';
import styles from './style/HelloWorld.module.css'; // CSS module -> className={styles.App} (AKA styled components)

function HelloWorld() {
  return <div className={styles.HelloWorld}>Hello World - React.js</div>;
}

export default HelloWorld;
