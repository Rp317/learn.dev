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
        <div id="header">
          <h1 id="logo">learn.dev</h1>
          <button id="o">info</button>
          <button id="ow">sign up</button>
          <button id="owo">log on</button>
        </div>
        <div id="information">
          <h1>We are a business that teaches you how to <h1>learn/create/develop/push</h1></h1>
          <h1>We offer a <strong>var</strong>iety of languages including</h1>
          <div>javascript/python/typescript/node and many more</div><button></button>
        </div>
        <div id="weFrickingCare">We care for the customers as we give them 1 on 1 tutoring if they get stuck/need motovation</div>
        <div id="creator">The creator is a minority child who like to make this company for the people, not the dollar.</div>
        <div id="joinNow">
          JOIN NOW FUTURE <h1>creator/developer/leader</h1>
        </div>
        <div id="theBottom">
          <button>learn.dev</button>
          <button>programs</button>
          <button>pricing</button>
          <button>list of items to learn</button>
        </div>
      </div>
     
    );
  }
}

render(<App />, document.getElementById('root'));
