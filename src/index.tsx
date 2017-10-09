import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import { store } from './store';

import App from './app';

render((
  <Provider store={store}>
  <div>
    <h1>Hello</h1>
    <App foo="bar"/>
  </div>
  </Provider>
), document.body);