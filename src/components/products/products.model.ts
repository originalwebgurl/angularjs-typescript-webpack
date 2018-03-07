export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    // calculateDiscount(percent: number): number;
}

export interface IProductService {
    getProductResource(): angular.resource.IResourceClass<IProductResource>;
}

export interface IProductResource
    extends angular.resource.IResource<IProduct> {
}

export class Product implements IProduct {

    constructor(public id: number,
                public title: string,
                public price: number,
                public description: string) {}

    calculateDiscount(percent: number) {
        return this.price - (this.price * percent/100);
    }
}
