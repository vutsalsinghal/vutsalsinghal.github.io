import React from 'react';
import ReactDOM from 'react-dom';
import './libs/fontawesome/fontawesome-all.min';
import './styles/base.scss';
import App from './App';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-136789989-1');

ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(<App />, document.getElementById('root'));
