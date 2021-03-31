import React from 'react';
import VideoItem from '../VideoItem';

function VideoList({ videos }) {
  return videos && videos.map((item) => <VideoItem item={item} key={item.id} />);
}

export default VideoList;
