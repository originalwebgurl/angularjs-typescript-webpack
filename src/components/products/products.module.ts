import angular from "angular";
import { ProductsComponent } from "./products.component";
import {ProductsService} from "./products.service";

export const ProductsModule = angular
    .module("products", [])
    .component("products", ProductsComponent)
    .service("productsService", ProductsService)
    .name;

