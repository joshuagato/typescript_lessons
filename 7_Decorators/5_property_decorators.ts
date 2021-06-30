function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

class Product {
    @Log
    title: string;
    private _price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    set price(val: number) {
        if (val > 0) this._price = val;
        else throw new Error('Invalid price: Should be positive');
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}
