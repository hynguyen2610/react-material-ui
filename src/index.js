
import React from 'react';
import { render } from 'react-dom';
import Demo from './demo';
import MyGrid from './mygrid';

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<MyGrid />, rootElement);
}
      