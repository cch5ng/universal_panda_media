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
		let videoSrc;
		if (this.props && this.props.match) {
			storyId = this.props.match.params.id;
		}
		if (this.props && this.props.idx) {
			idx = this.props.idx;
		}
		if (this.props && this.props.stories) {
			curStory = this.props.stories.stories.filter(story => story.id.toString() === storyId)
			curStory = curStory[0]
			console.log('curStory', curStory)
			videoSrc = `https://www.youtube.com/embed/${curStory.video.id.videoId}?autoplay=1`;
			console.log('videoSrc', videoSrc)
		}

/* placeholder

		<div className={styles.buttonsContainer}></div>

				<div className={styles.storyImage}>
					<img src={curStory[0].video.snippet.thumbnails.high.url} alt={curStory[0].image.description} />
					<p className={styles.imageCredit}>{curStory[0].author}</p>
				</div>

"https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
*/

		return (
			<div className={styles.storyDetail}>
				<div className={styles.textContent}>
					<p className={styles.category}>{curStory.category}</p>
					<p className={styles.titleDetail}>{curStory.title}</p>
				</div>
				<div className={styles.storyMetaContainer}>
					<div>date time</div>
					<div>show name</div>
					<div>reporter container
						<div>reporter headshot</div>
						<div>reporter byline</div>
						<div>reporter social icons container
							<div>facebook link</div>
							<div>twitter link</div>
							<div>instagram link</div>
						</div>
					</div>
				</div>

				<div className={styles.ytContainer}>
					<iframe id="ytplayer" type="text/html" className={styles.respIframe}
					  src={videoSrc}
					  frameBorder="0"></iframe>
				</div>

				<div>transcript</div>
				<div>story social sharing icons container</div>
				<div>
					<div>newsletter signup box heading</div>
					<div>newsletter signup text</div>
					<div>email input</div>
					<button>SUBSCRIBE</button>
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
