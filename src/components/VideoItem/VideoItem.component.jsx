import React from 'react';
import { ItemContainer, VideoImage, InfoContainer } from './VideoItem.styles';
import { useVideos } from '../../providers/Videos';

function VideoItem({ item }) {
  const { handleSelectVideo } = useVideos();

  return (
    <ItemContainer onClick={() => handleSelectVideo(item)} data-testid="video-item-container">
      <VideoImage src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
      <InfoContainer>
        <h3>{item.snippet.title}</h3>
        <p>{item.snippet.description}</p>
      </InfoContainer>
    </ItemContainer>
  );
}

export default VideoItem;
