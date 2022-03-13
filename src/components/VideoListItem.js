import React from 'react'
import './VideoListItem.css';

export const VideoListItem = ({ video, onVideoSelect }) => {
  return (
    <div key={video.etag} onClick={() => onVideoSelect(video)} className='video-item item'>
      <img className='ui image' src={video.snippet.thumbnails.default.url} />
      <div className='content'>
        <div className='header'> {video.snippet.title} </div>
      </div>
    </div>
  )
}
