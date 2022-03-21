import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div id="page">
        <div id="header"></div>
        <div id="information"></div>
        <div id="weFrickingCare"></div>
        <div id="creator"></div>
        <div id="joinNow"></div>
        <div id="theBottom"></div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
