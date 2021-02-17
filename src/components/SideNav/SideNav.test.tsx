import React from 'react';
import { render, screen } from '@testing-library/react';
import SideNav from './SideNav';

test('renders learn react link', () => {
  render(<SideNav />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
