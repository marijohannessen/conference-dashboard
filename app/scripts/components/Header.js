const React = require('react');

import ProfileInfo from './ProfileInfo';
import Tab from './Tab';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__logo">conf<span className="header__logo--light">call</span></h1>
        <Tab />
        <ProfileInfo />
      </header>
    )
  }
};

export default Header;
