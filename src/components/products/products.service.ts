export class ProductsService {
    static $inject: string[] = ["$http"];

    constructor(private $http: angular.IHttpService) {}
    getProducts(){
        return this.$http.get("http://angular.site:3000/products");
    }
}
