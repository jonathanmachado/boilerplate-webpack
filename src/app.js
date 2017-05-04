const css = require('./sass/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)
