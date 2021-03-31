import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Header from '../Header.component';
import { useVideos } from '../../../providers/Videos';
import { useAuth } from '../../../providers/Auth';

jest.mock('../../../providers/Videos');
jest.mock('../../../providers/Auth');
beforeAll(() => {
  useVideos.mockReturnValue({
    handleSelectVideo: jest.fn(),
    fetchVideos: jest.fn(),
    setDarkTheme: jest.fn(),
  });
  useAuth.mockReturnValue({
    authenticated: false,
    logout: jest.fn(),
  });
});

const renderWithHistory = (component) => {
  const history = createMemoryHistory();
  return render(<Router history={history}>{component}</Router>);
};

describe('Test Header component', () => {
  it('expect to render correctly', () => {
    const { getByText } = renderWithHistory(<Header />);

    expect(getByText('Login').tagName).toBe('A');
    expect(getByText('Dark Mode')).toBeTruthy();
  });

  it('should search and redirect to home', () => {
    const { fetchVideos } = useVideos();
    const { getByRole } = renderWithHistory(<Header />);
    fireEvent.keyDown(getByRole('textbox'), { key: 'Enter', code: 'Enter' });
    expect(fetchVideos).toHaveBeenCalledTimes(1);
  });

  it('should select dark mode', () => {
    const { setDarkTheme } = useVideos();
    const { getByRole } = renderWithHistory(<Header />);
    fireEvent.click(getByRole('checkbox', { hidden: true }));
    expect(setDarkTheme).toHaveBeenCalledTimes(1);
  });
});

describe('Test Header component atenticaded', () => {
  it('expect to render correctly with auth', () => {
    useAuth.mockReturnValueOnce({
      authenticated: true,
      logout: jest.fn(),
    });
    const { getByText } = renderWithHistory(<Header />);

    expect(getByText('Logout').tagName).toBe('BUTTON');
    expect(getByText('Dark Mode')).toBeTruthy();
    expect(getByText('Favorites')).toBeInTheDocument();
  });
});
