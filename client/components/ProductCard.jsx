import React from 'react';


//CSS: when hovering over element:
//  change cursor style
//  change background effect
const ProductCard = ({product}) => (
  <div className="product-card">
    <div className="product-images">
      <img src={product.productImage} alt={'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-600w-407021107.jpg'}></img>
    </div>
    <p id="product-name">{product.productName}</p>
    <p id="product-price">${product.productPrice}.00</p>
  </div>
);

export default ProductCard;