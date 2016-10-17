const React = require('react');

import ProfileInfo from './ProfileInfo';
import Tab from './Tab';

class SectionTabs extends React.Component {
  render() {
    return (
      <div className="section-tab__header">
        <h1 className="section-tab__heading">Recordings</h1>
        <ul className="section-tab__tabs">
          <li className="section-tab__tab section-tab__tab--selected">Recordings</li>
          <li className="section-tab__tab">Dial in access</li>
          <li className="section-tab__tab">Transcriptions</li>
        </ul>
      </div>
    )
  }
};

export default SectionTabs;
