import React, { useState, useEffect, useContext } from 'react';
// import { useHistory } from 'react-router';
import youtubeApi from '../../api/youtube';
import videosMockedData from '../../mocks/youtube-videos-mock.json';

const VideoContext = React.createContext(null);

function useVideos() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useVideos" without an VideoProvider!`);
  }
  return context;
}

function VideosProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);
  // const history = useHistory();

  const fetchVideos = async (searchText) => {
    const response = await youtubeApi.get('/search', {
      params: { q: searchText },
    });
    setVideos(response.data.items);
    setVideos(videosMockedData.items);
  };

  const handleSelectVideo = (video) => {
    setselectedVideo(video);
    // history.push(video.id.videoId);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <VideoContext.Provider
      value={{ videos, fetchVideos, selectedVideo, handleSelectVideo }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export { useVideos };
export default VideosProvider;
