import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

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
      <App />
      <my-product-image></my-product-image>
    </React.StrictMode>
  )
}