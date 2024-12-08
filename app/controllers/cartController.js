angular.module('shoppingCartApp').controller('CartController', function ($scope, CartService) {
  console.log("CartController loaded!");

  // Catalog and Cart
  $scope.catalog = CartService.getCatalog();
  $scope.cart = CartService.getCart();
  $scope.showCart = false;
  $scope.itemAdded = false; // Add a flag for item added message
  $scope.itemAddedMessage = ""; // Message content

  // Search Query and Product
  $scope.searchQuery = '';
  $scope.filteredCatalog = $scope.catalog; // Initially show all products

  // Function to add to cart
  $scope.addToCart = function (item) {
    CartService.addToCart(item);
    
    // Add message to the specific product card when added to the cart
    item.message = item.name + " has been added to your cart!";
    
    // Show the message for 2 seconds and then remove it
    setTimeout(function() {
      $scope.$apply(function() {
        item.message = ''; // Clear the message
      });
    }, 3000);
  };

  // Function to remove from cart
  $scope.removeFromCart = function (item) {
    CartService.removeFromCart(item);
  };

  // Function to update cart
  $scope.updateQuantity = function (item, quantity) {
    CartService.updateCart(item, quantity);
  };

  // Toggle cart view visibility
  $scope.toggleCartView = function () {
    $scope.showCart = !$scope.showCart; // Toggles the visibility of the cart
  };
  

  // Get total cart value
  $scope.getTotalCart = function () {
    return $scope.cart.reduce(function (total, item) {
      return total + item.price * item.quantity;
    }, 0).toFixed(2);
  };

  // Function to handle search
  $scope.searchProduct = function() {
    // If searchQuery is not empty, filter the catalog
    if ($scope.searchQuery && $scope.searchQuery.trim() !== '') {
      $scope.filteredCatalog = $scope.catalog.filter(function(item) {
        return item.name.toLowerCase().includes($scope.searchQuery.toLowerCase());
      });
    } else {
      // If searchQuery is empty, show all products
      $scope.filteredCatalog = $scope.catalog;
    }
  };
});
