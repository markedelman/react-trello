require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

import Card from './components/card';
import Cardlist from './components/list';
import Board from './components/board';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board />, document.getElementById('cardApp'))
);