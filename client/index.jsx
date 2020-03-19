import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ShopDisplay from './components/ShopDisplay.jsx';
import ProductCard from './components/ProductCard.jsx';

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
      url: `/listing/${this.state.currentProduct}`,
      method: 'GET',
      success: (data) => {
        this.setState({
          shopInfo: data.shopInfo[0],
          products: data.otherProducts
        });
      },
      error: (err) => {
        console.log('There was an error fetching the product data', err);
      }
    });
  }

  render () {
    let displayedProducts = this.state.products.slice(0, 8);
    return (
      <div id="moreFrom">
        {/* {console.log('shopinfo', this.state.shopInfo)} */}
        {/* {console.log('products', displayedProducts)} */}
        <div id="content-container">
          <ShopDisplay shopInfo={this.state}/>
          <div className="products-container">
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
    );
  }
}

ReactDOM.render(
  <MoreFrom />,
  document.getElementById('app')
);