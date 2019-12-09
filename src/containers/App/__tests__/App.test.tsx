import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

test('renders learn react app', () => {
  const app = mount(<App />);

  expect(app).toBeDefined();
});
