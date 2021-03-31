import React from 'react';
import { render } from '@testing-library/react';
import FavoritesPage from '../Favorites.page';
import favorites from '../../../utils/favoriteVideos';
import { useVideos } from '../../../providers/Videos';

jest.mock('../../../providers/Videos');

let videos;
beforeAll(() => {
  videos = [
    {
      id: 'id',
      title: 'Title',
      description: 'Description',
      image: 'URL',
    },
  ];
  useVideos.mockReturnValue({
    handleSelectVideo: jest.fn(),
  });
});

jest.mock('../../../utils/favoriteVideos', () => ({
  getFavorites: jest.fn(),
}));

describe('Test FavoritesPage component', () => {
  it('expect to render correctly', () => {
    favorites.getFavorites.mockReturnValueOnce(videos);

    const { getByTestId } = render(<FavoritesPage />);

    expect(getByTestId('favorites-page')).toBeInTheDocument();
  });
});
