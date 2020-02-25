// global dependencies
import React from 'react';

// local dependencies
import Navbar from 'components/Navbar';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  );
};

export default App;
