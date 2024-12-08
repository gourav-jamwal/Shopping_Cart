var app = angular.module('shoppingCartApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/catalog', {
      templateUrl: 'app/views/catalog.html',
      controller: 'CartController'
    })
    .when('/cart', {
      templateUrl: 'app/views/cart.html',
      controller: 'CartController'
    })
    .otherwise({
      redirectTo: '/catalog'
    });
});
