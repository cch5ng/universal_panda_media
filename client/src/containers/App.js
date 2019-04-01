import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Stories from '../containers/stories/Stories';
import ScrollToTop from './ScrollToTop';
import { fetchStories } from '../containers/stories/StoryActions';
import StoryDetail from './stories/StoryDetail';
import styles from './App.css';

let cx = classNames.bind(styles);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayNavMenu: false,
    }

    this.toggleNavigationMenu = this.toggleNavigationMenu.bind(this);
  }

  toggleNavigationMenu(ev) {
    ev.preventDefault();
    this.setState((state, props) => {
      return { displayNavMenu: !state.displayNavMenu }
    });

  }

  render() {
    let navCloseButtonClass = cx({
      navMenuItem: true,
      closeButton: true
    });

    //let hide = {styles.hide}
  	return (
  		<Router>
        <ScrollToTop>
    			<div className="App">
    				<header>
    					<nav>
                <div className={styles.logo}>UPV</div>
                <div className={this.state.displayNavMenu ? styles.hide : styles.navButtonContainer}>
                  <button className={styles.navButton} onClick={this.toggleNavigationMenu}>
                    &#9776;
                  </button>
                </div>
                <div className={this.state.displayNavMenu ? styles.navMenuContainer :  styles.hide}>
                  <div className={navCloseButtonClass} onClick={this.toggleNavigationMenu}>Close X</div>
                  <div className={styles.navMenuItem}>News</div>
                  <div className={styles.navMenuItem}>Arts & Life</div>
                  <div className={styles.navMenuItem}>Search</div>
                  <div className={styles.navMenuItem}>Panda Store</div>

                </div>
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
