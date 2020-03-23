import React from 'react';

const ShopDisplay = ({shopInfo}) => {

  return (
    <div className="shop-container">
      <div className="shop-actions">
        <div id="shop-icon-placeholder">
          <img src={shopInfo.shopInfo.shopIcon} alt={'https://cdn.shopify.com/s/files/1/1780/8157/products/Monstera_Quartz_1024x1024@2x.jpg?v=1581679323'}></img>
        </div>
        <div className="shop-static-data">
          <p className="shop-text-sm">More from</p>
          <h2 className="shop-data-xlg shop-name">{shopInfo.shopInfo.shopName}</h2>
          <p className="shop-data-sm-bold">{`See all ${shopInfo.products.length} items ->`}</p></div>
      </div>
      <div className="shop-static">
        <div id="shop-sales">
          <p className="shop-text-sm">Sales</p>
          <p className="shop-data-lg">{shopInfo.shopInfo.sales}</p>
        </div>
        <div id="shop-established">
          <p className="shop-text-sm">On Etsy since</p>
          <p className="shop-data-lg">{shopInfo.shopInfo.established}</p>
        </div>
        <div id="shop-location">
          <p className="shop-text-sm">Based In</p>
          <p className="shop-data-lg">{shopInfo.shopInfo.location}, USA</p>
        </div>
      </div>
    </div>
  );
};

export default ShopDisplay;