import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import VideoItem from '../VideoItem.component';
import { useVideos } from '../../../providers/Videos';

jest.mock('../../../providers/Videos');
let item;
beforeAll(() => {
  useVideos.mockReturnValue({
    handleSelectVideo: jest.fn(),
  });
  item = {
    snippet: {
      title: 'Title',
      description: 'Description',
      thumbnails: {
        medium: {
          url: 'URL',
        },
      },
    },
  };
});

describe('Test VideoItem component', () => {
  it('expect to render correctly', () => {
    const { getByText, getByAltText } = render(<VideoItem item={item} />);

    expect(getByText('Title').tagName).toBe('H3');
    expect(getByText('Description').tagName).toBe('P');
    expect(getByAltText('Title').tagName).toBe('IMG');
  });
});
