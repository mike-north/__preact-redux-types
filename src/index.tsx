import { h, render } from 'preact';
import App from './app';

render((
  <div>
    <h1>Hello</h1>
    <App foo="bar"/>
  </div>
), document.body);