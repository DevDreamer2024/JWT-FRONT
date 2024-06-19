import React from 'react';
import styles from '../styles/Home.module.css';



function Home() {
  return (
    <div className = {styles.container}>
     <div className = {styles.content}>
      <h1>Hello</h1>
      <div className = {styles.divider}>
        <h2>World</h2>
      </div>
      </div>
    </div>
  );
}

export default Home;