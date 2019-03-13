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

	Promise.all([http_requests.Stories.getAll(), http_requests.Videos.getAll()]) //http_requests.Images.getAllImages()
		.then(values => {
			let [storiesResp, videosResp] = values; //imagesResp
			let storiesCount = storiesResp.length;
			let videosAr = videosResp.items;
			//let imagesAr = imagesResp.results;

			for (let i = 0; i < storiesResp.length; i++) {
				storiesResp[i].video = videosAr[i];
				//storiesResp[i].image = imagesAr[i];
			}
			console.log('storiesResp', storiesResp)
			dispatch(receiveStories(storiesResp))
		})
		.catch(err => console.error('error', err))
}
