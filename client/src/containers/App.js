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
    				<footer>
              <div className={styles.footerLinksContainer}>
                <div className={styles.footerLinksSection}>
                  <div className={styles.footerLinkHeading}>READ & WATCH</div>
                  <div className={styles.footerLink}>Home</div>
                  <div className={styles.footerLink}>News</div>
                  <div className={styles.footerLink}>Arts & Life</div>
                  <div className={styles.footerLink}>Programs</div>
                </div>
                <div className={styles.footerLinksSection}>
                  <div className={styles.footerLinkHeading}>CONNECT</div>
                  <div className={styles.footerLink}>Newsletters</div>
                  <div className={styles.footerLink}>Facebook</div>
                  <div className={styles.footerLink}>Twitter</div>
                  <div className={styles.footerLink}>Contact</div>
                </div>
                <div className={styles.footerLinksSection}>
                  <div className={styles.footerLinkHeading}>ABOUT UPV</div>
                  <div className={styles.footerLink}>Overview</div>
                  <div className={styles.footerLink}>Finances</div>
                  <div className={styles.footerLink}>People</div>
                  <div className={styles.footerLink}>Press</div>
                </div>
                <div className={styles.footerLinksSection}>
                  <div className={styles.footerLinkHeading}>GET INVOLVED</div>
                  <div className={styles.footerLink}>Support UPV</div>
                  <div className={styles.footerLink}>UPV Careers</div>
                  <div className={styles.footerLink}>UPV Shop</div>
                  <div className={styles.footerLink}>Visit UPV</div>
                </div>
              </div>
              <div className={styles.footerTermsContainer}>
                <div className={styles.footerTermsLinkItem}>terms of use</div>
                <div className={styles.footerTermsLinkItem}>privacy</div>
                <div className={styles.footerTermsLinkItem}>your privacy choices</div>
                <div className={styles.footerTermsLinkItem}>text only</div>
                <div className={styles.footerTermsItem}>2019 UPV</div>
              </div>
            </footer>
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
