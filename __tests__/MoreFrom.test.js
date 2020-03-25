import React from 'react';
import {shallow, mount, render} from 'enzyme';
import MoreFrom from '../client/components/MoreFromContainer';
import ShopDisplay from '../client/components/ShopDisplay';

describe('MoreFrom tests', () => {
  let moreFrom = shallow(<MoreFrom />);

  it('should render MoreFrom without throwing an error', () => {
    expect(moreFrom.exists())
  });

  // it('should have 3 child elements', () => {
  //   expect(moreFrom.children()).toHaveLength(3);
  // })

  it('should have a child element with a class of products-container', () => {
    expect(moreFrom.find('.products-container').children()).toHaveLength(1)
  });

});

