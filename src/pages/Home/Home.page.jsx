import React from 'react';
import './Home.styles.css';
import VideoList from '../../components/VideoList';
import { useVideos } from '../../providers/Videos';

function HomePage() {
  const { videos } = useVideos();

  return (
    <section className="homepage" data-testid="home-page">
      <VideoList videos={videos} />
    </section>
  );
}

export default HomePage;
