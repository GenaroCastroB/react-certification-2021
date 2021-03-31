const adaptApiYoutubeVideoData = (videos) => {
  return videos.map((video, index) => {
    const key = video.id.videoId ? video.id.videoId : index;
    return {
      id: key,
      image: video.snippet.thumbnails.medium.url,
      title: video.snippet.title,
      description: video.snippet.description,
    };
  });
};

const VideosAdapters = {
  adaptApiYoutubeVideoData,
};

export default VideosAdapters;
