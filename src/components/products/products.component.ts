import {ProductsController} from "./products.controller";

export const ProductsComponent: angular.IComponentOptions = {
    controller: ProductsController,
    template: require("./products.html"),
};
