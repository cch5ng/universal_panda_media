import http_requests from '../../utils/http_requests';

// sync story actions
export const REQUEST_STORIES = 'REQUEST_STORIES';
export const RECEIVE_STORIES = 'RECEIVE_STORIES';

export function requestStories() {
	return {
		type: REQUEST_STORIES,
		retrieving: true,
		storiesErr: null,
	}
}

export function receiveStories(response) {
	return {
		type: RECEIVE_STORIES,
		retrieving: false,
		stories: response,
		storiesErr: response.error || null
	}	
}

// async fetch stories
export const fetchStories = () => dispatch => {
	dispatch(requestStories());

	http_requests.Stories.getAll()
		.then(json => dispatch(receiveStories(json)))
		.catch(err => console.error('error', err))
}

// sync image actions
export const REQUEST_IMAGES = 'REQUEST_IMAGES';
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';

// async fetch images
export const fetchImages = () => dispatch => {
	http_requests.Images.getAllImages()
		.then(json => console.log('images', json))
		.catch(err => console.error('error', err))
}
