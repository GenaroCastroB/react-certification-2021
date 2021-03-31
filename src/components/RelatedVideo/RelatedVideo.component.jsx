import React from 'react';
import StyledRelatedVideoContainer, {
  StyledRelatedVideoImage,
  StyledRelatedVideoTitleContainer,
  StyledRelatedVideoTitle,
} from './RelatedVideo.styles';
import { useVideos } from '../../providers/Videos';

function RelatedVideo({ relatedVideo }) {
  const { handleSelectVideo } = useVideos();

  return (
    <StyledRelatedVideoContainer
      onClick={() => handleSelectVideo(relatedVideo)}
      data-testid="related-video-container"
    >
      <StyledRelatedVideoImage src={relatedVideo.image} alt={relatedVideo.title} />
      <StyledRelatedVideoTitleContainer>
        <StyledRelatedVideoTitle>{relatedVideo.title}</StyledRelatedVideoTitle>
      </StyledRelatedVideoTitleContainer>
    </StyledRelatedVideoContainer>
  );
}

export default RelatedVideo;
