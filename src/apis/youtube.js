import axios from 'axios';

const KEY = 'AIzaSyCMqtWYk6dLMccdLh70g-fN1vHunhm39B0';

export default axios.create ({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});

//https://console.developers.google.com/
//https://developers.google.com/youtube/v3/docs/search/list
