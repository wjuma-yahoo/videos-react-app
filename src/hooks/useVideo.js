import { useState, useEffect } from 'react';
import { Youtube } from '../api/youtube';

export const useVideo = (defaultSearchTerm) => {

  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    catchFormSubmitted(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const catchFormSubmitted = async (term) => {
    const response = await Youtube.get('/search', {
      params: {
        q: term
      }
    });
    setVideos(response.data.items);
  }

  return [videos, catchFormSubmitted];
}
