import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AppContainer from '../App';

const { AppTest } = AppContainer;

test('renders learn react link', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <AppTest />
    </MemoryRouter>,
  );
  const linkElement = getByText(/CliquePay/i);
  expect(linkElement).toBeInTheDocument();
});
