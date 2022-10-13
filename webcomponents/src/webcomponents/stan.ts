class Stan {
    private counter: number;

    constructor() {
        this.counter = 0;
    }

    public increment() {
        this.counter += 1;
        console.info('Teraz licznik wynosi ==> ', this.counter);
    }
}

const inst = new Stan();

export default inst;
