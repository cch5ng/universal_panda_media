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
		let videoId;
		let idx;
		if (this.props && this.props.match) {
			videoId = this.props.match.params.id;
		}
		if (this.props && this.props.idx) {
			idx = this.props.idx;
			console.log('idx', idx);
		}

		return (
			<div className={styles.storyDetail}>
				<div className={styles.textContent}>
					<p className={styles.category}>{this.props.story.category}</p>
					<p className={styles.title}>{this.props.story.title}</p>
					<p>{this.props.story.textShort}</p>
				</div>
				<div className={styles.storyImage}>
					<img src={this.props.story.image.urls.regular} alt={this.props.story.image.description} />
					<p className={styles.imageCredit}>{this.props.story.image.user.name}</p>
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
