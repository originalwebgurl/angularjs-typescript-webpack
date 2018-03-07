import {IProduct, IProductService} from "./products.model";

export class ProductsController implements angular.IComponentController {

    products: IProduct[];
    title: string;

    static $inject: string[] = ["productsService"];
    constructor(private productsService: IProductService) {
        console.log("Controller constructor");
        this.title = "Product List";
        this.products = [];
        const productResource = this.productsService
            .getProductResource();
        productResource.query((data: IProduct[]) => {
            this.products = data;
        });
    }

    $onInit() {
        this.productsService
            .getProductResource();
            // .getProducts()
            // .then((successResponse) => {
            //     console.log("Products success");
            //     this.products = (successResponse.data);
            //     console.dir(successResponse);
            // },(errorResponse) => {
            //     console.error(errorResponse);
            // })
    }
}
