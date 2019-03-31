import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories, fetchImages } from './StoryActions';
import globalStyles from '../App.css';
import storyStyles from './Stories.css';

let styles = {};
Object.assign(styles, globalStyles, storyStyles);

class StoryDetail extends Component {

	constructor(props) {
		super(props);
	}

	// componentDidMount() {
	// }

	render() {
		let storyId;
		let idx;
		let curStory;
		let curVideo;
		if (this.props && this.props.match) {
			storyId = this.props.match.params.id;
		}
		if (this.props && this.props.idx) {
			idx = this.props.idx;
			console.log('idx', idx);
		}
		if (this.props && this.props.stories) {
			curStory = this.props.stories.stories.filter(story => story.id.toString() === storyId)
			console.log('curStory', curStory)
		}

		return (
			<div className={styles.storyDetail}>
				<div className={styles.textContent}>
					<p className={styles.category}>{curStory[0].category}</p>
					<p className={styles.title}>{curStory[0].title}</p>
					<p>{curStory[0].textShort}</p>
				</div>
				<div className={styles.storyImage}>
					<img src={curStory[0].video.snippet.thumbnails.high.url} alt={curStory[0].image.description} />
					<p className={styles.imageCredit}>{curStory[0].author}</p>
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

export default connect(mapStateToProps)(StoryDetail);
