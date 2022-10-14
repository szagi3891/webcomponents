import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import stan from './webcomponents/stan';

declare global {
  namespace JSX {
      interface IntrinsicElements {
          'my-product-image': React.DetailedHTMLProps<
              React.HTMLAttributes<HTMLElement>,
              HTMLElement
          >;
      }
  }
}

declare global {
  namespace JSX {
      interface IntrinsicElements {
          'my-product-image2': React.DetailedHTMLProps<
              React.HTMLAttributes<HTMLElement> & { name: string },
              HTMLElement
          >;
      }
  }
}


setTimeout(() => {
  console.info('zasysam webcomponent');

  import("./webcomponents/button");
}, 5000);

const root = document.getElementById('root');

// window.zmienna_wspoldzielona = 'tajny klucz szyfrujący do multiverse';

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
      <my-product-image>
        jakaś zawartość która została wsadzona w ten komponent - statyczna
      </my-product-image>
      <my-product-image>
        i kolejna - statyczna
      </my-product-image>

      <my-product-image2 name="dsadas">
        i kolejna - statyczna
      </my-product-image2>

    </React.StrictMode>
  )
}