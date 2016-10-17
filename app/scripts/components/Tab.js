const React = require('react');

class Tab extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">Dashboard</li>
          <li className="nav__list-item nav__list-item--selected">Recordings</li>
          <li className="nav__list-item">Reports</li>
          <li className="nav__list-item">Account</li>
          <li className="nav__list-item">Help & Support</li>
        </ul>
      </nav>
    )
  }
};

export default Tab;
