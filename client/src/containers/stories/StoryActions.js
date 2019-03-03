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

	Promise.all([http_requests.Stories.getAll(), http_requests.Images.getAllImages()])
		.then(values => {
			let [storiesResp, imagesResp] = values;
			let storiesCount = storiesResp.length;
			let imagesAr = imagesResp.results;

			for (let i = 0; i < storiesResp.length; i++) {
				storiesResp[i].image = imagesAr[i];
			}
			console.log('storiesResp', storiesResp)
			dispatch(receiveStories(storiesResp))
		})
		.catch(err => console.error('error', err))
}

// sync image actions
// export const REQUEST_IMAGES = 'REQUEST_IMAGES';
// export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';

// export function requestImages() {
// 	return {
// 		type: REQUEST_IMAGES,
// 		retrieving: true,
// 		imagesErr: null
// 	}
// }

// export function receiveImages(images) {
// 	return {
// 		type: RECEIVE_IMAGES,
// 		retrieving: false,
// 		images
// 	}
// }

// async fetch images
// export const fetchImages = () => dispatch => {
// 	http_requests.Images.getAllImages()
// 		.then(json => {
// 			console.log('images', json)
// 			//return json	
// 			dispatch(receiveImages(json.results))
// 		})
// 		.catch(err => console.error('error', err))
// }
