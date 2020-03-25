import React from 'react';
import { shallow } from 'enzyme';
import ShopDisplay from '../client/components/ShopDisplay';

describe('ShopDisplay tests', () => {
  let shop;
  beforeEach(() => {
    shop = shallow(<ShopDisplay shopInfo={{shopInfo: {
      shopIcon:'shopIcon url',
      shopName: 'Test',
      sales: 123,
      established: 2015,
      location: 'Seattle'
    }, products: [1, 2, 3, 4, 5]}}/>);
  });

  it('should render ShopDisplay witout errors', () => {
    expect(shop.exists())
  });

  it('has a class of shop-container', () => {
    expect(shop.hasClass('shop-container')).toBe(true);
  });

  it('has 2 child elements', () => {
    expect(shop.children()).toHaveLength(2);
  })
});