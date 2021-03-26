import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../Header.component';
import { Router } from 'react-router-dom';
import { useVideos } from '../../../providers/Videos';
import { createMemoryHistory } from 'history';

jest.mock('../../../providers/Videos');
beforeAll(() => {
  useVideos.mockReturnValue({
    handleSelectVideo: jest.fn(),
    fetchVideos: jest.fn(),
    setDarkTheme: jest.fn()
  });
});

describe('Test Header component', () => {
  it('expect to render correctly', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Login').tagName).toBe('BUTTON');
    expect(getByText('Dark Mode')).toBeTruthy();
  });

  it('should search and redirect to home', () => {
    const history = createMemoryHistory();
    const { fetchVideos } = useVideos();
    const { getByRole } = render(
      <Router history={history}>
        <Header />
      </Router>);
    fireEvent.keyDown(getByRole('textbox'), { key: 'Enter', code: 'Enter' });
    expect(fetchVideos).toHaveBeenCalledTimes(1);
  });

  it('should select dark mode', () => {
    const { setDarkTheme } = useVideos();
    const { getByRole } = render( <Header />);
    fireEvent.click(getByRole('checkbox', { hidden: true }));
    expect(setDarkTheme).toHaveBeenCalledTimes(1);
  });
});
