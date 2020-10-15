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

  componentDidMount() {
    
    fetch("http://127.0.0.1:8000/fetch")
      .then(res => res.json())
      .then(
        (result) => {      
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
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
            <h1 className={styles.heading2x1}>{items[0]}</h1>
            <img className={styles.img} src= {items[1][1]} alt="" ></img>
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
