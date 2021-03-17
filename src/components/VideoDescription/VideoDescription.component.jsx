import React from 'react';
import StyledDescriptionContainer, {
  StyledRelatedVideosContainer,
  StyledVideoDescription,
} from './VideoDescription.styles';
import Relatedvideo from '../RelatedVideo';
import NotFound from '../../pages/NotFound';
import { useVideos } from '../../providers/Videos';

function VideoDescription() {
  const { videos, selectedVideo } = useVideos();

  if (selectedVideo) {
    return (
      <StyledDescriptionContainer>
        <StyledVideoDescription>
          <iframe
            title="video"
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
          />
          <h3>{selectedVideo.snippet.title}</h3>
          <p>{selectedVideo.snippet.description}</p>
        </StyledVideoDescription>
        <StyledRelatedVideosContainer>
          {videos.map((realtedVideo) => {
            return <Relatedvideo relatedVideo={realtedVideo} key={realtedVideo.etag} />;
          })}
        </StyledRelatedVideosContainer>
      </StyledDescriptionContainer>
    );
  }

  return <NotFound />
}

export default VideoDescription;
