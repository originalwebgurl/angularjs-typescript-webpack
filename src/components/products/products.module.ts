import angular from "angular";
import $resource from "angular-resource";
import { ProductsComponent } from "./products.component";
import {ProductsService} from "./products.service";

export const ProductsModule = angular
    .module("products", [
        $resource
    ])
    .component("productsComponent", ProductsComponent)
    .service("productsService", ProductsService)
    .name;

