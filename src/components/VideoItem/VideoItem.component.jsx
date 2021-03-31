import React from 'react';
import { ItemContainer, VideoImage, InfoContainer } from './VideoItem.styles';
import { useVideos } from '../../providers/Videos';

function VideoItem({ item }) {
  const { handleSelectVideo } = useVideos();

  return (
    <ItemContainer
      onClick={() => handleSelectVideo(item)}
      data-testid="video-item-container"
    >
      <VideoImage src={item.image} alt={item.title} />
      <InfoContainer>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </InfoContainer>
    </ItemContainer>
  );
}

export default VideoItem;
