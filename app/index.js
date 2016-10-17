'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Navigation = ReactRouter.Navigation;
const History = ReactRouter.History;
const createBrowserHistory = require('history/lib/createBrowserHistory');

const Rebase = require('re-base');
// const base = Rebase.createClass({
//   apiKey: "AIzaSyARrP0ebJZYrnEvac253gFtUi-HEeY2Ex8",
//   authDomain: "ff-players-2016.firebaseapp.com",
//   databaseURL: "https://ff-players-2016.firebaseio.com",
//   storageBucket: "ff-players-2016.appspot.com",
//   messagingSenderId: "295302240888"
// });

require('./scss/main.scss');

// <App />
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>React Template</h1>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('#app'));
