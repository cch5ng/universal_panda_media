import { REQUEST_STORIES, RECEIVE_STORIES,
	REQUEST_VIDEOS, RECEIVE_VIDEOS } from './StoryActions';

export function stories(state = {}, action) {
	switch(action.type) {

		case REQUEST_STORIES:
			return {
				...state,
				retrieving: action.retrieving,
				storiesErr: action.storiesErr
			}
		case REQUEST_VIDEOS:
			return {
				...state,
				retrievingVideo: action.retrieving,
				videosErr: action.videosErr
			}
		case RECEIVE_STORIES:
			return {
				...state,
				retrieving: action.retrieving,
				storiesErr: action.storiesErr,
				stories: action.stories
			}
		case RECEIVE_VIDEOS:
			return {
				...state,
				retrievingVideo: action.retrieving,
				videosErr: action.videosErr,
				videos: action.videos
			}
		default:
			return state
	}
};
