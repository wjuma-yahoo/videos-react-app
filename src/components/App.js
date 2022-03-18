import React, { useEffect, useState } from 'react';

// Components
import VideoList from './VideoList';
import { SearchBar } from './SearchBar';
import { VideoDetail } from './VideoDetail';

// Hooks
import { useVideo } from '../hooks/useVideo';


export const App = () => {

  const [videos, catchFormSubmitted] = useVideo('nicoang');
  const [videoSelected, setVideoSelected] = useState(null);

  useEffect(() => {
    setVideoSelected(videos[0]);
  }, [videos]);

  return (
    <div className='ui container' style={{ marginTop: '25px' }}>
        <SearchBar onCatchFormSubmitted={catchFormSubmitted} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={videoSelected} />
            </div>
            <div className='five wide column'>
              <VideoList onVideoSelect={setVideoSelected} videos={videos}/>
            </div>
          </div>
        </div>
    </div>
  )

}

