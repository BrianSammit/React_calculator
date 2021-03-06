import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../components/App';

describe('App', () => {
  it('renders', () => {
    const tree = renderer
      .create(
        <Router>
          <App />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
