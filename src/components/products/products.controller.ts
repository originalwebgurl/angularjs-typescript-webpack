import {ProductsService} from "./products.service";
import {IProduct} from "./products";

export class ProductsController implements angular.IComponentController {
    static $inject: string[] = ["productsService"];
    products: any;

    constructor(private productsService: ProductsService) {
        console.log("Controller constructor");
    }

    $onInit() {
        this.productsService
            .getProducts()
            .then((successResponse) => {
                console.log("Products success");
                this.products = (successResponse.data);
                console.dir(successResponse);
            },(errorResponse) => {
                console.error(errorResponse);
            })
    }
}
