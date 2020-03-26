import React from 'react';
import $ from 'jquery';
import ShopDisplay from './ShopDisplay.jsx';
import ProductCard from './ProductCard.jsx';

class MoreFrom extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentProduct: 1,
      shopInfo: {},
      products: []
    };
  }

  componentDidMount () {
    this.getInfo();
  }

  getInfo () {
    $.ajax({
      url: `http://localhost:3004/listing/${this.state.currentProduct}`,
      method: 'GET',
      success: (data) => {
        this.setState({
          shopInfo: data.shopInfo[0],
          products: data.otherProducts
        });
      },
      error: (err) => {
        console.error('There was an error fetching the product data', err);
      }
    });
  }

  render () {
    let displayedProducts = this.state.products.slice(0, 8);
    return (
      <div id="moreFrom">
        <div id="content-container">
          <ShopDisplay shopInfo={this.state}/>
          <div className="products-container">
            <div className="products-inner">
              {displayedProducts.map((product) => {
                return <ProductCard
                  key={product.id}
                  product={product}
                />;
              }
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoreFrom;