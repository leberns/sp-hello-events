import React from 'react';
import 'jest';
import TestRenderer from 'react-test-renderer';
import SearchEvents from './SearchEvents';

describe('SearchEvents component', () => {

  it('should render the Filter button', () => {
    const testRenderer = TestRenderer.create(<SearchEvents initialExpression="Lorem" executeSearchHandler={searchExpression => searchExpression } />);
    const testInstance = testRenderer.root;

    const button = testInstance.findByType('button');

    expect(button).toBeDefined();
  });
});
