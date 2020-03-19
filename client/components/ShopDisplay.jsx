import React from 'react';

const ShopDisplay = ({shopInfo}) => {

  return (
    <div className="shop-container">
      <div className="shop-actions">
        <div id="shop-icon-placeholder">
          <img src={shopInfo.shopInfo.shopIcon} alt={'https://cdn.shopify.com/s/files/1/1780/8157/products/Monstera_Quartz_1024x1024@2x.jpg?v=1581679323'}></img>
        </div>
        <p className="shop-text-plain">More from</p>
        <p>{shopInfo.shopInfo.shopName}</p>
        <p>{`See all ${shopInfo.products.length} items ->`}</p>
      </div>
      <div className="shop-static">
        <div id="shop-sales">
          <p className="shop-text-plain">Sales</p>
          <p>{shopInfo.shopInfo.sales}</p>
        </div>
        <div className="shop-established">
          <p className="shop-text-plain">On Etsy since</p>
          <p>{shopInfo.shopInfo.established}</p>
        </div>
        <div className="shop-location">
          <p className="shop-text-plain">Based In</p>
          <p>{shopInfo.shopInfo.location}</p>
        </div>
      </div>
    </div>
  );
};

export default ShopDisplay;