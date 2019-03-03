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
		this.props.dispatch(fetchImages());
	}

	render() {
		return (
			<div>
				<h1>Stories</h1>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		stories: state.stories,
	}
}

export default connect(mapStateToProps)(Stories);
