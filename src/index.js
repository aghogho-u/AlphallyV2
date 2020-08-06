import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/Layout/App.jsx';
import './App/Layout/style.css'
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root')

function render() {
ReactDOM.render(<App />,rootEl)
}

if (module.hot){
  module.hot.accept ('./App/Layout/App.jsx', function(){
    setTimeout(render);
  })
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
