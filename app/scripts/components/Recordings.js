const React = require('react');
import Recording from './Recording.js';

class Recordings extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="recordings__container">
        <ul className="recordings">
          <Recording
            title="Conference Podcast #321"
            desc="Add Description"
            duration="00:03:21"
            date="24 Jun 2016 09:30pm"
          />
          <Recording
            title="Monday Morning Stand-up Meeting"
            desc="Catching up on the website"
            duration="00:05:10"
            date="22 Aug 2016 12:00pm"
          />
          <Recording
            title="Conference Podcast #122"
            desc="The importance of focus states"
            duration="00:08:42"
            date="10 Sept 2016 11:00am"
          />
          <Recording
            title="Conference Podcast #420"
            desc="CSS Grids"
            duration="00:12:55"
            date="08 Sept 2016 09:00am"
          />
        </ul>
      </div>
    )
  }
};

export default Recordings;
