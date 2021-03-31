import React from 'react';
import { render } from '@testing-library/react';
import VideoDescription from '../VideoDescription.component';
import { useVideos } from '../../../providers/Videos';
import { useAuth } from '../../../providers/Auth';

jest.mock('../../../providers/Videos');
jest.mock('../../../providers/Auth');
jest.mock('../../../utils/favoriteVideos', () => ({
  addToFavorites: jest.fn(),
  removeFromFavorites: jest.fn(),
  getFavoriteVideo: jest.fn(),
}));

let video;
let relatedVideos;
beforeAll(() => {
  video = {
    id: 'videoId',
    image: 'url',
    title: 'video-title',
    description: 'video-description',
  };
  relatedVideos = [
    {
      id: 'videoId',
      image: 'url',
      title: 'title',
      description: 'description',
    },
  ];

  useVideos.mockReturnValue({
    handleSelectVideo: jest.fn(),
    videos: relatedVideos,
    selectedVideo: video,
  });
});

describe('Test VideoDescription component', () => {
  useAuth.mockReturnValue({
    authenticated: false,
  });
  it('expect to render correctly', () => {
    const { getByText, getByTitle } = render(<VideoDescription />);

    expect(getByText('video-title').tagName).toBe('H3');
    expect(getByText('video-description').tagName).toBe('P');
    expect(getByTitle('video')).toBeInTheDocument();
  });
});

describe('Test Autenticaded VideoDescription component', () => {
  it('expect to render correctly', () => {
    useAuth.mockReturnValueOnce({
      authenticated: true,
    });
    const { getByText, getByTitle } = render(<VideoDescription />);

    expect(getByText('video-title').tagName).toBe('H3');
    expect(getByText('video-description').tagName).toBe('P');
    expect(getByTitle('video')).toBeInTheDocument();
    expect(getByText('Add to favorites')).toBeInTheDocument();
  });
});
