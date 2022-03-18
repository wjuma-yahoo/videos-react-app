import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { VideoListItem } from './VideoListItem';

export default class VideoList extends Component {

  render() {
    
    const renderedList = this.props.videos.map((video) => {
      return <VideoListItem onVideoSelect={this.props.onVideoSelect} key={video.etag} video={video} />
    });

    return (
      <div className='ui relaxed divided list'>
          { renderedList }
      </div>
    )

  }

}
