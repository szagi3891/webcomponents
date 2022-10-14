import stan from './stan';

const template = document.createElement('template');

template.innerHTML = `
    <style>
        .product-image {
            background: lightgrey;
            padding: 1em;
        }
        body {
            background-color: black !important;
        }

        div {
            color: red;
        }
    </style>
    <div class="product-image" id="przycisk">
        To jest zawartość webcomponentu my-product-image
    </div>
`;

class ProductImage extends HTMLElement {
    static get observedAttributes() {
        return ['src'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        if (this.shadowRoot) {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            // this.shadowRoot.querySelector('img').src = this.getAttribute('src');

            const button = this.shadowRoot.getElementById('przycisk');

            if (button !== null) {
                button.addEventListener('click', () => {
                    console.info("Klikam z komponentu");
                    stan.increment();
                });
            }
            // this.shadowRoot.querySelector('#przycisk')

            // console.info('odczytuję tajną zmienną szyfrującą', window.zmienna_wspoldzielona);
        }
    }

    get src() {
        return this.getAttribute('src');
    }

    set src(val) {
        // this.setAttribute('src', val);
    }

    // attributeChangedCallback(src, oldvalue, newvalue) {
    //     // if (src === 'src') {
    //         // this.shadowRoot.querySelector('img').src = newvalue;
    //     // }
    // }
}

window.customElements.define('my-product-image', ProductImage);

// window.customElements.whenDefined

export default {};