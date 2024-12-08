var catalog = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    description: 'Experience immersive sound with these high-quality wireless headphones.',
    image: 'https://tse3.mm.bing.net/th?id=OIP.6WZHCb9rVStvjjH43x9kXQHaHa&pid=Api&P=0&h=180',
    quantityInStock: 10  // Add quantity in stock
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 699.99,
    description: 'The latest smartphone with advanced features and stunning display.',
    image: 'https://cdn.mos.cms.futurecdn.net/R4JUHrXr8HnCvFKLsxhe5h.jpg',
    quantityInStock: 5
  },
  {
    id: 3,
    name: 'Gaming Laptop',
    price: 1200.00,
    description: 'High-performance gaming laptop with a sleek design.',
    image: 'https://tse3.mm.bing.net/th?id=OIP.aDYVOyTkOE9YqngPbmDwtAHaGP&pid=Api&P=0&h=180',
    quantityInStock: 7
  },
  {
    id: 4,
    name: 'Smartwatch',
    price: 199.99,
    description: 'Stay connected and track your fitness goals with this stylish smartwatch.',
    image: 'https://tse3.mm.bing.net/th?id=OIP.-OmRqu6PMDxijnXimzRWCQAAAA&pid=Api&P=0&h=180',
    quantityInStock: 12
  },
  {
    id: 5,
    name: 'Portable Speaker',
    price: 49.99,
    description: 'Compact and powerful portable speaker for on-the-go music lovers.',
    image: 'https://tse2.mm.bing.net/th?id=OIP.dZjhr0U7Tm2tGduRd3GEcgHaOe&pid=Api&P=0&h=180',
    quantityInStock: 15
  },
  {
    id: 6,
    name: 'Bluetooth Earbuds',
    price: 129.99,
    description: 'Wireless earbuds with crystal-clear sound and noise-cancelling features.',
    image: 'https://tse3.mm.bing.net/th?id=OIP.qr01Z40JyywlFtAb_wlmTQHaHa&pid=Api&P=0&h=180',
    quantityInStock: 20
  },
  {
    id: 7,
    name: '4K TV',
    price: 799.99,
    description: 'Enjoy stunning visuals with this 4K UHD smart TV.',
    image: 'https://tse1.mm.bing.net/th?id=OIP.5sPRXUtRvig3rYqSVMvqIAHaEK&pid=Api&P=0&h=180',
    quantityInStock: 8
  },
  {
    id: 8,
    name: 'Electric Scooter',
    price: 349.99,
    description: 'Eco-friendly electric scooter for fast and fun urban commuting.',
    image: 'https://tse4.mm.bing.net/th?id=OIP.9UR64T9jQoJ1raYl3FiKCwHaIV&pid=Api&P=0&h=180',
    quantityInStock: 10
  }
];


var cart = [];

function getCatalog() {
  return catalog;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === item.id) {
      cart[i].quantity++;
      found = true;
      break;
    }
  }
  if (!found) {
    item.quantity = 1;
    cart.push(item);
  }
}

function removeFromCart(item) {
  var index = cart.indexOf(item);
  if (index !== -1) {
    cart.splice(index, 1);
  }
}

function updateCart(item, quantity) {
  var index = cart.indexOf(item);
  if (index !== -1 && quantity > 0) {
    cart[index].quantity = quantity;
  }
}

function clearCart() {
  cart.length = 0;
}

angular.module('shoppingCartApp').service('CartService', function () {
  return {
    getCatalog: getCatalog,
    getCart: getCart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    updateCart: updateCart,
    clearCart: clearCart
  };
});
