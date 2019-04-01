import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories, fetchImages } from './StoryActions';
import globalStyles from '../App.css';
import storyStyles from './Stories.css';
import { getPrettyDateTime } from '../../utils/helpers';

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
		let prettyDate;

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
			prettyDate = getPrettyDateTime(curStory.createdOnDate);
			console.log('prettyDate', prettyDate);
			console.log('videoSrc', videoSrc)
		}

/* placeholder

		<div className={styles.buttonsContainer}></div>

				<div className={styles.storyImage}>
					<img src={curStory[0].video.snippet.thumbnails.high.url} alt={curStory[0].image.description} />
					<p className={styles.imageCredit}>{curStory[0].author}</p>
				</div>
*/

		return (
			<div className={styles.storyDetail}>
				<div className={styles.textContent}>
					<p className={styles.category}>{curStory.category}</p>
					<p className={styles.titleDetail}>{curStory.title}</p>
				</div>
				<div className={styles.storyMetaContainer}>
					<div className={styles.storyMetaText}>{prettyDate}</div>
					<div className={styles.bylineContainer}>
						<div className={styles.reporterHeadshot}><i className="fas fa-user-alt"></i></div>
						<div className={styles.reporterName}>{curStory.author}</div>
						<div className={styles.socialIconsContainer}>
							<div className={styles.socialIcon}><i className="fab fa-facebook-square"></i></div>
							<div className={styles.socialIcon}><i className="fab fa-twitter"></i></div>
							<div className={styles.socialIcon}><i className="fab fa-instagram"></i></div>
						</div>
					</div>
				</div>

				<div className={styles.ytContainer}>
					<iframe id="ytplayer" type="text/html" className={styles.respIframe}
					  src={videoSrc}
					  frameBorder="0"></iframe>
				</div>

				<div className={styles.shareSocialIconsContainer}>
					<div className={styles.shareSocialIcon}><i className="fab fa-facebook-square fa-2x"></i></div>
					<div className={styles.shareSocialIcon}><i className="fab fa-twitter fa-2x"></i></div>
					<div className={styles.shareSocialIcon}><i className="fab fa-flipboard fa-2x"></i></div>
					<div className={styles.shareSocialIcon}><i className="fas fa-envelope fa-2x"></i></div>
				</div>

				<div className={styles.signupContainer}>
					<div className={styles.signupHeading}><h2>Sign Up For The Pandas Newsletter</h2></div>
					<div className={styles.signupText}><p>Get the latest news, videos, reviews and more, sent weekly.</p></div>
					<div><input type="email" className={styles.inputNewsletter} placeholder="What's your email?" /></div>
					<button className={styles.btnSignup}>SUBSCRIBE</button>
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
