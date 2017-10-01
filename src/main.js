import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './Test'
 
// ReactDOM.render(
//     <Test/>,
//     document.getElementById('app')
//   );

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
      React.createElement(App),
      document.getElementById('app')
    );
  });