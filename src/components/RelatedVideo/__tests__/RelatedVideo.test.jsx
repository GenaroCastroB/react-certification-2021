import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RelatedVideo from '../RelatedVideo.component';
import { useVideos } from '../../../providers/Videos';

jest.mock('../../../providers/Videos');

let relatedVideo;
beforeAll(() => {
  useVideos.mockReturnValue({
    handleSelectVideo: jest.fn(),
  });
  relatedVideo = {
    image: 'url',
    title: 'title',
  };
});

describe('Test RelatedVideo component', () => {
  it('expect to render correctly', () => {
    const { getByRole, getByAltText } = render(
      <RelatedVideo relatedVideo={relatedVideo} />
    );

    expect(getByRole('img')).toBeTruthy();
    expect(getByAltText('title')).toBeTruthy();
  });

  it('expect click to be executed correctly', () => {
    const { handleSelectVideo } = useVideos();
    const { getByTestId } = render(<RelatedVideo relatedVideo={relatedVideo} />);

    fireEvent.click(getByTestId('related-video-container'));
    expect(handleSelectVideo).toHaveBeenCalledTimes(1);
  });
});
