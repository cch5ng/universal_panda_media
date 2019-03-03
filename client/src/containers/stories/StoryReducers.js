import { REQUEST_STORIES, RECEIVE_STORIES } from './StoryActions';

export function stories(state = {}, action) {
	switch(action.type) {

		case REQUEST_STORIES:
			return {
				...state,
				retrieving: action.retrieving,
				storiesErr: action.storiesErr
			}
		case RECEIVE_STORIES:
			return {
				...state,
				retrieving: action.retrieving,
				storiesErr: action.storiesErr,
				stories: action.stories
			}
		default:
			return state
	}
};
