import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Home />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
