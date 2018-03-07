import {IProductResource, IProductService} from "./products.model";

export class ProductsService implements IProductService {

    static $inject: string[] = ["$resource"];
    constructor(private $resource: angular.resource.IResourceService) {}

    getProductResource(): angular.resource.IResourceClass<IProductResource> {
        return this.$resource("http://angular.site:3000/products/:id");
    }
}
