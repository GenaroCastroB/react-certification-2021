import React, { useState, useEffect } from 'react';
import StyledDescriptionContainer, {
  StyledRelatedVideosContainer,
  StyledVideoDescription,
} from './VideoDescription.styles';
import { FavoritesButton } from '../Button';
import Relatedvideo from '../RelatedVideo';
import NotFound from '../../pages/NotFound';
import { useVideos } from '../../providers/Videos';
import { useAuth } from '../../providers/Auth';
import favorites from '../../utils/favoriteVideos';

function VideoDescription({ relatedVideos }) {
  const { selectedVideo } = useVideos();
  const { authenticated } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritesClick = () => {
    if (isFavorite) {
      favorites.removeFromFavorites(selectedVideo.id);
      setIsFavorite(false);
      return;
    }
    favorites.addToFavorites(selectedVideo);
    setIsFavorite(true);
  };

  useEffect(() => {
    if (selectedVideo) {
      setIsFavorite(!!favorites.getFavoriteVideo(selectedVideo.id));
    }
  }, [selectedVideo]);

  if (selectedVideo) {
    return (
      <StyledDescriptionContainer>
        <StyledVideoDescription>
          <iframe
            title="video"
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${selectedVideo.id}`}
          />
          {authenticated && (
            <FavoritesButton
              label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              handleClick={handleFavoritesClick}
            />
          )}
          <h3>{selectedVideo.title}</h3>
          <p>{selectedVideo.description}</p>
        </StyledVideoDescription>
        <StyledRelatedVideosContainer>
          {relatedVideos &&
            relatedVideos.map((realtedVideo) => {
              return <Relatedvideo relatedVideo={realtedVideo} key={realtedVideo.id} />;
            })}
        </StyledRelatedVideosContainer>
      </StyledDescriptionContainer>
    );
  }

  return <NotFound />;
}

export default VideoDescription;
