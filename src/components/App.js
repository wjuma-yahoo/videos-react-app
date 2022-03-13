import React from 'react'
import { SearchBar } from './SearchBar'

import youtube from '../api/youtube';
import VideoList from './VideoList';
import { VideoDetail } from './VideoDetail';

export class App extends React.Component {

  state = { videos: [], videoSelected: null }

  componentDidMount() {
    this.catchFormSubmited("nicoang");
  }

  catchFormSubmited = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ 
      videos: response.data.items,
      videoSelected: response.data.items[0] 
    });
  }

  onVideoSelect = video => {
    this.setState({ videoSelected: video });
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '25px' }}>
          <SearchBar onCatchFormSubmited={this.catchFormSubmited} />
          <div className='ui grid'>
            <div className='ui row'>
              <div className='eleven wide column'>
                <VideoDetail video={this.state.videoSelected} />
              </div>
              <div className='five wide column'>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
