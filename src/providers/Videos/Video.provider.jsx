import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
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
  const [darkTheme, setDarkTheme] = useState(false);
  const history = useHistory();

  const fetchVideos = async (searchText = 'wizeline') => {
    if (process.env.REACT_APP_ENV !== 'prod') {
      setVideos(videosMockedData.items);
      return;
    }
    const response = await youtubeApi.get('/search', {
      params: { q: searchText },
    });
    setVideos(response.data.items);
  };

  const handleSelectVideo = (video) => {
    setselectedVideo(video);
    history.push(video.id.videoId);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <VideoContext.Provider
      value={{ videos, fetchVideos, selectedVideo, handleSelectVideo, darkTheme, setDarkTheme }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export { useVideos };
export default VideosProvider;
