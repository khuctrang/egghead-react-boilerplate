import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <h1>Hello Hanoi</h1>
        <img src='./images/logo.jpg' />
        <img src='/images/logo.jpg' />
        <img src='/images/logo.jpg' />
        <img src='/images/logo.jpg'></img>
        <img src='/images/logo-1.jpg' alt='Three > Two'></img>
      </div>
    );
  }
}

export default hot(module)(App);
