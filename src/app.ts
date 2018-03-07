import angular from 'angular';
import { ProductsModule } from "./components/products/products.module";

angular.element(document).ready(function() {
    console.log("Bootstrapping ... ");
    console.dir(ProductsModule);
    angular.bootstrap(document, [ProductsModule]);
});
