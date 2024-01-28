import React from 'react';
import { render } from '@testing-library/react';
import { BasicButton } from './button.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicButton />);
  const rendered = getByText('Basic Button');
  expect(rendered).toBeTruthy();
});
