import React from 'react';

function StoryDetail(props) {
	return (
		<div className={styles.storyDetail}>
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

export default StoryDetail;
