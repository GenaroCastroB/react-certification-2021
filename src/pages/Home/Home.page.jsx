import React from 'react';
import './Home.styles.css';
import VideoList from '../../components/VideoList';
import VideoDescription from '../../components/VideoDescription';
import { useVideos } from '../../providers/Videos';

function HomePage() {
  const { videos, selectedVideo } = useVideos();

  return (
    <section className="homepage" data-testid="home-page">
      {selectedVideo ? <VideoDescription video={selectedVideo} relatedVideos={videos}/> : <VideoList videos={videos} />}
    </section>
  );
}

export default HomePage;
