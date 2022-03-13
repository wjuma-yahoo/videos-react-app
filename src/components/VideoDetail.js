import React from 'react'

export const VideoDetail = ({ video }) => {

  if(!video) {
    return <div>Loading ...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  
  return (
    <div className='ui segment'>
      <div className='ui embed'>
        <iframe title='Video Player' src={videoSrc} />
      </div>
      <h4 className='ui header'>{ video.snippet.title }</h4>
      <p> { video.snippet.description } </p>
    </div>
  );

}
