import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header.component';
import { useVideos } from '../../../providers/Videos';

jest.mock('../../../providers/Videos');
beforeAll(() => {
  useVideos.mockReturnValue({
    handleSelectVideo: jest.fn(),
  });
});

describe('Test Header component', () => {
  it('expect to render correctly', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Login').tagName).toBe('BUTTON');
    expect(getByText('Dark Mode')).toBeTruthy();
  });
});
