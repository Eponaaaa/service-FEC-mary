import React from 'react';
import ReactDOM from 'react-dom';
import MoreFrom from './components/MoreFromContainer.jsx';
import '../public/styles.css';

const { productId } = window;
ReactDOM.render(
  <MoreFrom productId={productId || 1} />,
  document.getElementById('app4')
);
