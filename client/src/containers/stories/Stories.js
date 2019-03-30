import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
			<div className={styles.pageContainer}>
				<div className={styles.storiesContainer}>
					{primaryStory && (
						<PrimaryStory story={primaryStory} />
					)}


					{secondaryStoriesAr.length > 0 && (
						<div className={styles.secondaryStoriesContainer}>
							{secondaryStoriesAr.map(secondaryStory => 
								(<SecondaryStory story={secondaryStory} />)
							)}
						</div>
					)}

					{genStoriesAr.map(genStory =>
						(<Story story={genStory} />)
					)}
				</div>
				<div className={styles.adContainer}>
					<div className={styles.adContent}>
						<p>Ad Placeholder</p>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		stories: state.stories,
	}
}

//	<img src={props.story.image.urls.regular} alt={props.story.image.description} />
/*
	"elva-fairy-320w.jpg,
    elva-fairy-480w.jpg 1.5x,
    elva-fairy-640w.jpg 2x"
		<p className={styles.imageCredit}>{props.story.image.user.name}</p>
*/

function PrimaryStory(props) {
	let srcSet = `${props.story.video.snippet.thumbnails.high.url}, ${props.story.video.snippet.thumbnails.medium.url} 1.5x, ${props.story.video.snippet.thumbnails.high.url} 2x`;
	let link = props.story.video.id.videoId ? `/story/${props.story.video.id.videoId}` : '/';

	return (
		<div className={styles.story}>
			<div className={styles.textContent}>
				<p className={styles.category}>{props.story.category}</p>
				<p className={styles.title}>{props.story.title}</p>
				<p>{props.story.textShort}</p>
			</div>
			<div className={styles.storyImage}>
				<NavLink to={link}>
					<img srcSet={srcSet}
						src={props.story.video.snippet.thumbnails.high.url} alt={props.story.video.snippet.thumbnails.title} />
				</NavLink>
			</div>
		</div>
	)
}

function SecondaryStory(props) {
	let secondStoryContainerClass = classNames({
		[styles.story]: true,
		[styles.secondaryStory]: true
	});
	let srcSet = `${props.story.video.snippet.thumbnails.high.url}, ${props.story.video.snippet.thumbnails.medium.url} 1.5x, ${props.story.video.snippet.thumbnails.high.url} 2x`;
	let link = props.story.video.id.videoId ? `/story/${props.story.video.id.videoId}` : '/';

	return (
		<div className={secondStoryContainerClass}>
			<div className={styles.textContent}>
				<p className={styles.category}>{props.story.category}</p>
				<p className={styles.title}>{props.story.title}</p>
			</div>
			<div className={styles.storyImage}>
				<NavLink to={link}>
					<img srcSet={srcSet}
						src={props.story.video.snippet.thumbnails.high.url} alt={props.story.video.snippet.thumbnails.title} />
				</NavLink>
			</div>
		</div>
	)
}

function Story(props) {
	let srcSet = `${props.story.video.snippet.thumbnails.high.url}, ${props.story.video.snippet.thumbnails.medium.url} 1.5x, ${props.story.video.snippet.thumbnails.high.url} 2x`;
	let link = props.story.video.id.videoId ? `/story/${props.story.video.id.videoId}` : '/';

	return (
		<div className={styles.story}>
			<div className={styles.textContent}>
				<p className={styles.category}>{props.story.category}</p>
				<p className={styles.title}>{props.story.title}</p>
				<p>{props.story.textShort}</p>
				<div className={styles.btnMedium}><span className={styles.btnMediumIcon}>&#9654;</span> Play</div>
				<div className={styles.btnSmall}><span className={styles.btnSmallIcon}>&#43;</span> Queue</div>
			</div>
			<div className={styles.storyImage}>
				<NavLink to={link}>
					<img srcSet={srcSet}
						src={props.story.video.snippet.thumbnails.high.url} alt={props.story.video.snippet.thumbnails.title} />
				</NavLink>
			</div>
		</div>
	)
}

export default connect(mapStateToProps)(Stories);
