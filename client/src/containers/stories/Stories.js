import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { fetchStories, fetchImages } from './StoryActions';
//import globalStyles from '../App.css';

class Stories extends Component {

	constructor(props) {
		super(props);

		//this.getQuestionsMissedCount = this.getQuestionsMissedCount.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(fetchStories());
	}

	render() {
		let primaryStory = this.props.stories && this.props.stories.stories ? this.props.stories.stories.filter(story => story.type === 'top story')[0]: null;
		let secondaryStoriesAr = this.props.stories && this.props.stories.stories ? this.props.stories.stories.filter(story => story.type === 'secondary story') : [];
		let genStoriesAr = this.props.stories && this.props.stories.stories ? this.props.stories.stories.filter(story => story.type === 'story') : [];

		return (
			<div>
				<h1>Stories</h1>

				{primaryStory && (
					<PrimaryStory story={primaryStory} />
				)}

				{secondaryStoriesAr.map(secondaryStory => 
					(<SecondaryStory story={secondaryStory} />)
				)}

				{genStoriesAr.map(genStory =>
					(<Story story={genStory} />)
				)}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		stories: state.stories,
	}
}

function PrimaryStory(props) {
	return (
		<div>
			<div>
				<p>{props.story.category}</p>
				<p>{props.story.title}</p>
				<p>{props.story.textShort}</p>
			</div>
			<div>
				<img src={props.story.image.urls.regular} alt={props.story.image.description} />
			</div>
		</div>
	)
}

function SecondaryStory(props) {
	return (
		<div>
			<div>
				<p>{props.story.category}</p>
				<p>{props.story.title}</p>
			</div>
			<div>
				<img src={props.story.image.urls.regular} alt={props.story.image.description} />
			</div>
		</div>
	)
}

function Story(props) {
	return (
		<div>
			<div>
				<p>{props.story.category}</p>
				<p>{props.story.title}</p>
				<p>{props.story.textShort}</p>
			</div>
			<div>
				<img src={props.story.image.urls.regular} alt={props.story.image.description} />
			</div>
		</div>
	)
}

export default connect(mapStateToProps)(Stories);
