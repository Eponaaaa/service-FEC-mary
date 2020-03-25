import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ProductCard from '../client/components/ProductCard';

describe('ProductCard tests', () => {
  let card;
  beforeEach(()=> {
    card = shallow(<ProductCard product={
   { productImage: 'urltopicture', productName: 'hat', productPrice: 7}
  } />)
  })

  it('renders a product card without errors', () => {
    expect(card.exists())
  });

  it('has a class of product-card', () => {
    expect(card.hasClass('product-card')).toBe(true)
  });

  it('has 3 children', () => {
    expect(card.children()).toHaveLength(3)
  });

  it('One of the children has an image tag', () => {
    expect(card.find('img').length).toBe(1);
  });
});
