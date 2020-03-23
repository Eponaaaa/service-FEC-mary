import React from 'react';

const ProductCard = ({product}) => (
  <div className="product-card" >
    <div className="product-image">
      <img src={product.productImage} alt={'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg'}></img>
    </div>
    <p className="product-name shop-text-sm">{product.productName}</p>
    <p className="product-price shop-text-price">${product.productPrice}.00</p>
  </div>
);

export default ProductCard;