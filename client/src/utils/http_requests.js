const JSON_SERVER_API_ROOT = process.env.JSON_SERVER_API_ROOT;
const STORIES_ALL = 'stories';

const YOUTUBE_API_ROOT = 'https://content.googleapis.com/youtube/v3/';
const YOUTUBE_VIDEOS_REQUEST = `search?part=snippet&maxResults=25&q=doxiemom19%20panda&key=${process.env.YOUTUBE_CLIENT_KEY}`;
const YOUTUBE_VIDEO_BY_ID_REQUEST_MID = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=`
const YOUTUBE_SUFFIX = `&key=${process.env.YOUTUBE_CLIENT_KEY}`;

const requests = {
  get: url => {
    return new Promise((resolve, reject) => {
      fetch(url)
      	.then(resp => resolve(resp.json()))
	      .catch(err => reject(err))
    })
  },
  getVideoById: url => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(resp => resolve(resp.json()))
        .catch(err => reject(err))
    })
  },
};

const Stories = {
  getAll: () => {
    return requests.get(`${JSON_SERVER_API_ROOT}${STORIES_ALL}`)
  },
}

const Videos = {
  getAll: () => {
    return requests.get(`${YOUTUBE_API_ROOT}${YOUTUBE_VIDEOS_REQUEST}`)
  },
  getVideoById: videoId => {
    let tempUrl = `${YOUTUBE_API_ROOT}${YOUTUBE_VIDEO_BY_ID_REQUEST_MID}${videoId}${YOUTUBE_SUFFIX}`;

    return requests.getVideoById(tempUrl)
  },
}


export default {
  Stories,
  Videos,
}
