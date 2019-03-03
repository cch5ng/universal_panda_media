const JSON_SERVER_API_ROOT = process.env.JSON_SERVER_API_ROOT;
const STORIES_ALL = 'stories';

const UNSPLASH_API_ROOT = 'https://api.unsplash.com/';
const IMAGES_NATURE = 'search/photos?query=nature&per_page=30';

const requests = {
  get: url => {
    return new Promise((resolve, reject) => {
      fetch(url)
      	.then(resp => resolve(resp.json()))
	      .catch(err => reject(err))
    })
  },
  getImages: url => {
    return new Promise((resolve, reject) => {
      fetch(url,
        {headers: {
          "Authorization": process.env.UNSPLASH_CLIENT_KEY
        }}
      )
        .then(resp => resolve(resp.json()))
        .catch(err => reject(err))
    })
  },
};

const Stories = {
  getAll: () => {
    return requests.get(`${API_ROOT}${STORIES_ALL}`)
  },
}

const Images = {
  getAllImages: () => {
    return requests.getImages(`${UNSPLASH_API_ROOT}${IMAGES_NATURE}`)
  },
}

export default {
  Stories,
  Images,
}