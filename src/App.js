import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ThemeSwitcher from "@components/ThemeSwitcher";
import ParallaxBackground from "@components/ParallaxBackground";
import LandingPage from "@pages/LandingPage";
import AboutPage from "@pages/AboutPage";
import PortfolioPage from "@pages/PortfolioPage";
import ScrollTop from "@components/ScrollTop";
// import Browser from '@components/Browser';
import Footer from "@components/Footer";
import ReactGA from "react-ga";

class App extends Component {
  componentDidMount() {
    ReactGA.initialize("UA-146042235-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div className="dev-landing-page">
        <BrowserRouter>
          <ThemeSwitcher>
            <ParallaxBackground />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <div>
                    <LandingPage />
                    <AboutPage />
                    <PortfolioPage />
                  </div>
                )}
              />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/projects" component={PortfolioPage} />
            </Switch>
            <ScrollTop />
            <Footer />
          </ThemeSwitcher>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
