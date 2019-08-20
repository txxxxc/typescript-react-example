import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Component />, document.getElementById('root'));

// If you want your Component to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
