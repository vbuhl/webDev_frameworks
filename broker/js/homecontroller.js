/**
 * Created by User on 07-09-2015.
 */
(function () {
    var app = angular.module("app",[]);
    app.controller("homeController", homeController);
    app.factory("productService", productService);

    function homeController($scope, productService) {

        productService.getProducts().then(function(data){
           $scope.products = data;
        });
    }

    function productService($http){
        var getProducts = function(){
            return $http.get("JSON/products.json")
                .then(function(response){
                    return response.data;
                });
        };

        return {
            getProducts: getProducts
        };
    }
})();