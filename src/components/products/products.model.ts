import {IProduct} from "./products";

export class Product implements IProduct {

    constructor(public id: number,
                public title: string,
                public price: number,
                public description: string) {}

    calculateDiscount(percent: number) {
        return this.price - (this.price * percent/100);
    }
}
