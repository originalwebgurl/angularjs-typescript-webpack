import {ProductsController} from "./products.controller";

export const ProductsComponent: angular.IComponentOptions = {
    controller: ProductsController,
    template: `
        <div class="products">
            <h2>Products</h2>
            <products-list products="$ctrl.products"></products-list>
        </div>
    `,
};
