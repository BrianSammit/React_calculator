import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Calculator />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
