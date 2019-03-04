import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { fetchStories, fetchImages } from './StoryActions';
import globalStyles from '../App.css';
import storyStyles from './Stories.css';

let styles = {};
Object.assign(styles, globalStyles, storyStyles);

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
		<div className={styles.story}>
			<div className={styles.textContent}>
				<p className={styles.category}>{props.story.category}</p>
				<p className={styles.title}>{props.story.title}</p>
				<p>{props.story.textShort}</p>
			</div>
			<div className={styles.storyImage}>
				<img src={props.story.image.urls.regular} alt={props.story.image.description} />
				<p className={styles.imageCredit}>{props.story.image.user.name}</p>
			</div>
		</div>
	)
}

function SecondaryStory(props) {
	let secondStoryContainerClass = classNames({
		[styles.story]: true,
		[styles.secondaryStory]: true
	});

	return (
		<div className={secondStoryContainerClass}>
			<div className={styles.textContent}>
				<p className={styles.category}>{props.story.category}</p>
				<p className={styles.title}>{props.story.title}</p>
			</div>
			<div className={styles.storyImage}>
				<img src={props.story.image.urls.regular} alt={props.story.image.description} />
				<p className={styles.imageCredit}>{props.story.image.user.name}</p>
			</div>
		</div>
	)
}

function Story(props) {
	return (
		<div className={styles.story}>
			<div className={styles.textContent}>
				<p className={styles.category}>{props.story.category}</p>
				<p className={styles.title}>{props.story.title}</p>
				<p>{props.story.textShort}</p>
			</div>
			<div className={styles.storyImage}>
				<img src={props.story.image.urls.regular} alt={props.story.image.description} />
				<p className={styles.imageCredit}>{props.story.image.user.name}</p>
			</div>
		</div>
	)
}

export default connect(mapStateToProps)(Stories);
