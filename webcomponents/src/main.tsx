import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import stan from './webcomponents/stan';

setTimeout(() => {
  console.info('zasysam webcomponent');

  import("./webcomponents/button");
}, 5000);

const root = document.getElementById('root');

if (root === null) {
  console.error('Brak root');
} else {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <div onClick={() => {
        console.info("klikam z App");
        stan.increment();
      }}>
        Licznik z App
      </div>
      <App />
      <my-product-image></my-product-image>
    </React.StrictMode>
  )
}