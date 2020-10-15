import Head from 'next/head'
import styles from './index.module.css'
import './App.css'

import React from 'react';
import ReactDOM from 'react-dom';

import HoverRating from './rating'

//import app from './server'

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  
  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Head>
            <title>First Post</title>
          </Head>
          <section className={styles.container}>
            <img className={styles.img} src="./icons-01.svg" alt="" ></img>
            <img className={styles.img} src="./icons-02.svg" alt="" ></img>
            <HoverRating />
          </section>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

export default MyComponent
