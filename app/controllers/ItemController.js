app.controller('ItemController', function ($scope, $routeParams, CartService) {
    const itemId = $routeParams.id;
    $scope.item = CartService.getCatalog().find(item => item.id == itemId);
  });
  