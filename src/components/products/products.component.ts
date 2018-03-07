import {ProductsController} from "./products.controller";
// import "./products.html";

export const ProductsComponent: angular.IComponentOptions = {
    controller: ProductsController,
    // templateUrl: "./products.html",
    template: `<div class="products">
    <h2>{{::$ctrl.title}}</h2>
    <table>
        <thead>
        <tr>
            <td>Product</td>
            <td>Price</td>
        </tr>
        </thead>
        <tbody>
        <tr ng-repeat="product in $ctrl.products">
            <td>
                <h3>{{ product.title }}</h3>
                <p>{{ product.description }}</p>
            </td>
            <td>
                <strong>{{ product.price }}</strong>
            </td>
        </tr>
        </tbody>
    </table>
</div>
`,
};
