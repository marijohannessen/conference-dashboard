'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
require('./scss/main.scss');

import Header from './scripts/components/Header';
import SectionTabs from './scripts/components/SectionTabs';
import Toolbar from './scripts/components/Toolbar';
import Recordings from './scripts/components/Recordings';

// <App />
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <SectionTabs />
        <Toolbar />
        <Recordings />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('#app'));
