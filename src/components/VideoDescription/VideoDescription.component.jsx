import React from 'react';
import StyledDescriptionContainer, { StyledRelatedVideosContainer, StyledVideoDescription } from './VideoDescription.styles';
import Relatedvideo from '../RelatedVideo';

function VideoDescription({ video, relatedVideos }) {
  return (
    <StyledDescriptionContainer>
      <StyledVideoDescription>
        <iframe title="video" width="100%" height="500px" src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </StyledVideoDescription>
      <StyledRelatedVideosContainer>
        {relatedVideos.map(realtedVideo => {
          return <Relatedvideo relatedVideo={realtedVideo} key={realtedVideo.etag}/>;
        })}
      </StyledRelatedVideosContainer>
    </StyledDescriptionContainer>
  );
}

export default VideoDescription;
