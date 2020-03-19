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
        console.log(data);
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
    return (
      <div id="MoreFrom">
        {/* {console.log('shopinfo', this.state.shopInfo)} */}
        {console.log('products', this.state.products)}
        <div className="mf-content-container">
          <div className="mf-shopInfo-container">
            <ShopDisplay shopInfo={this.state}/>
          </div>
          <div className="mf-products-container">
            {[1, 1, 1].map((ele, i) => {
              return <ProductCard key={i}/>;
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
  document.getElementById('moreFrom')
);