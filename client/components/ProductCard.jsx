import React from 'react';

const ProductCard = ({product}) => (
  <div className="product-card" >
    <div className="product-image">
      <img className="img" src={product.productImage} alt={`image of ${product.productName}`></img>
    </div>
    <p className="product-name shop-text-sm">{product.productName}</p>
    <p className="product-price shop-text-price">${product.productPrice}.00</p>
  </div>
);

export default ProductCard;
