import React from 'react';
import StyledRelatedVideoContainer, { StyledRelatedVideoImage, StyledRelatedVideoTitleContainer, StyledRelatedVideoTitle } from './RelatedVideo.styles';
import { useVideos } from '../../providers/Videos';

function RelatedVideo({ relatedVideo }) {
  const { handleSelectVideo } = useVideos();

  return (
    <StyledRelatedVideoContainer onClick={() => handleSelectVideo(relatedVideo)}>
      <StyledRelatedVideoImage src={relatedVideo.snippet.thumbnails.medium.url} alt={relatedVideo.snippet.title}/>
      <StyledRelatedVideoTitleContainer>
        <StyledRelatedVideoTitle>{relatedVideo.snippet.title}</StyledRelatedVideoTitle>
      </StyledRelatedVideoTitleContainer>
    </StyledRelatedVideoContainer>
  );
}

export default RelatedVideo;
