import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Stories from '../containers/stories/Stories';
import ScrollToTop from './ScrollToTop';
import { fetchStories } from '../containers/stories/StoryActions';
import StoryDetail from './stories/StoryDetail';
import styles from './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }

    //this.startCountdownTimer = this.startCountdownTimer.bind(this);
  }

  render() {

  	return (

  		<Router>
        <ScrollToTop>
    			<div className="App">
    				<header>
    					<nav>
                <div className={styles.logo}>UPV</div>
                <div ><button className={styles.navButton}>&#9776;</button></div>
              </nav>
    				</header>
    				<main>
    					<Switch>
                <Route exact path="/story/:id" render={({match}) => (
                  <StoryDetail match={match} />
                  )} />
  							<Route exact path="/" render={() => (
                  <Stories />
                  )}/>
    					</Switch>
    				</main>
    				<footer></footer>
    			</div>
        </ScrollToTop>
  		</Router>
  	)
  }
}

function mapStateToProps(state) {
  return {
    stories: state.stories,
  }
}

export default connect(mapStateToProps)(App);
