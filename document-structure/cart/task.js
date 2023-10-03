const cartProducts = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');

function createCartProduct(productId, productTitle, productImageSrc, quantity) {
  const cartProduct = document.createElement('div');
  cartProduct.classList.add('cart__product');
  cartProduct.setAttribute('data-id', productId);
  
  const cartProductImage = document.createElement('img');
  cartProductImage.classList.add('cart__product-image');
  cartProductImage.setAttribute('src', productImageSrc);
  
  const cartProductCount = document.createElement('div');
  cartProductCount.classList.add('cart__product-count');
  cartProductCount.textContent = quantity;
  
  cartProduct.appendChild(cartProductImage);
  cartProduct.appendChild(cartProductCount);
  
  return cartProduct;
}

function addToCart(productId, productTitle, productImageSrc, quantity) {
    const existingCartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
    
    if (existingCartProduct) {
      const cartProductCount = existingCartProduct.querySelector('.cart__product-count');
      const currentQuantity = parseInt(cartProductCount.textContent);
      cartProductCount.textContent = currentQuantity + quantity;
    } else {
      const cartProduct = createCartProduct(productId, productTitle, productImageSrc, quantity);
      cartProducts.appendChild(cartProduct);
    }
  }

products.forEach(function(product) {
  const productId = product.getAttribute('data-id');
  const productTitle = product.querySelector('.product__title').textContent;
  const productImageSrc = product.querySelector('.product__image').getAttribute('src');
  const quantityValue = product.querySelector('.product__quantity-value');
  
  product.querySelector('.product__quantity-control_dec').addEventListener('click', function() {
    let quantity = parseInt(quantityValue.textContent);
    if (quantity > 1) {
      quantityValue.textContent = quantity - 1;
    }
  });
  
  product.querySelector('.product__quantity-control_inc').addEventListener('click', function() {
    let quantity = parseInt(quantityValue.textContent);
    quantityValue.textContent = quantity + 1;
  });
  
  product.querySelector('.product__add').addEventListener('click', function() {
    const quantity = parseInt(quantityValue.textContent);
    addToCart(productId, productTitle, productImageSrc, quantity);
  });
});
  