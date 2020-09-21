import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AppContainer from '../App';

const { AppTest } = AppContainer;

test('renders learn react link', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/auth']}>
      <AppTest />
    </MemoryRouter>,
  );
  const testElement = getByText(/Login to get started/i);
  expect(testElement).toBeInTheDocument();
});
