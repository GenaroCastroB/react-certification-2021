import React from 'react';
import { render } from '@testing-library/react';
import VideoList from '../VideoList.component';
import { useVideos } from '../../../providers/Videos';

jest.mock('../../../providers/Videos');

let videos;
beforeAll(() => {
  useVideos.mockReturnValue({
    handleSelectVideo: jest.fn(),
  });
  videos = [
    {
      id: 'videoId',
      image: 'url',
      title: 'title',
      description: 'description',
    },
  ];
});

describe('Test VideoList component', () => {
  it('expect to render correctly', () => {
    const { getByRole, getByAltText } = render(<VideoList videos={videos} />);

    expect(getByRole('img')).toBeTruthy();
    expect(getByAltText('title')).toBeTruthy();
  });
});
