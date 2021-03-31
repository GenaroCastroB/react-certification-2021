import React, { useState, useEffect } from 'react';
import VideoList from '../../components/VideoList';
import favorites from '../../utils/favoriteVideos';

function FavoritesPage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const favVideos = favorites.getFavorites();
    setVideos(favVideos);
  }, []);

  return (
    <section className="favorites" data-testid="favorites-page">
      <VideoList videos={videos} />
    </section>
  );
}

export default FavoritesPage;
