import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import ThemeSwitcher from "@components/ThemeSwitcher";
import ParallaxBackground from "@components/ParallaxBackground";
import LandingPage from "@pages/LandingPage";
import AboutPage from "@pages/AboutPage";
import PortfolioPage from "@pages/PortfolioPage";
import ScrollTop from "@components/ScrollTop";
// import Browser from '@components/Browser';
import Footer from "@components/Footer";
import ReactGA from "react-ga";
var createHistory = require("history").createBrowserHistory;

ReactGA.initialize("UA-146042235-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const history = createHistory();
history.listen(function(location) {
  window.ga("set", "page", location.pathname + location.search);
  window.ga("send", "pageview");
});

class App extends Component {
  render() {
    return (
      <div className="dev-landing-page">
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <ThemeSwitcher>
                    <ParallaxBackground />
                    <LandingPage />
                    <AboutPage />
                    <PortfolioPage />
                    <ScrollTop />
                    <Footer />
                  </ThemeSwitcher>
                </div>
              )}
            />
            {/* <Route exact path="/about" component={AboutPage} />
            <Route exact path="/projects" component={PortfolioPage} /> */}
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
