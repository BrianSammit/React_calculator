import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quotes';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Quote />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
