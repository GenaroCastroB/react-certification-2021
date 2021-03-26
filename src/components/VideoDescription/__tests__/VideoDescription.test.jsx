import React from 'react';
import { render } from '@testing-library/react';
import VideoDescription from '../VideoDescription.component';
import { useVideos } from '../../../providers/Videos';

jest.mock('../../../providers/Videos');

let video;
let relatedVideos;
beforeAll(() => {
  video = {
    id: {
      videoId: 'videoId',
    },
    snippet: {
      thumbnails: {
        medium: {
          url: 'url',
        },
      },
      title: 'video-title',
      description: 'video-description',
    },
  };
  relatedVideos = [
    {
      id: {
        videoId: 'videoId',
      },
      etag: 'etag',
      snippet: {
        thumbnails: {
          medium: {
            url: 'url',
          },
        },
        title: 'title',
        description: 'description',
      },
    },
  ];

  useVideos.mockReturnValue({
    handleSelectVideo: jest.fn(),
    videos: relatedVideos,
    selectedVideo: video,
  });
});

describe('Test VideoDescription component', () => {
  it('expect to render correctly', () => {
    const { getByText, getByTitle } = render(
      <VideoDescription />
    );

    expect(getByText('video-title').tagName).toBe('H3');
    expect(getByText('video-description').tagName).toBe('P');
    expect(getByTitle('video')).toBeInTheDocument();
  });
});
