const React = require('react');

class Toolbar extends React.Component {
  openDropdown = (evt) => {
    const dropdown = document.querySelector('.toolbar__dropdown');
    dropdown.classList.toggle('open');
  }

  openFilterDropdown = (evt) => {
    const dropdown = document.querySelector('.toolbar__filter-dropdown');
    dropdown.classList.toggle('open');
  }

  render() {
    return (
      <div className="toolbar">
        <div className="toolbar__left-content">
          <h2 className="toolbar__amount">Recordings (4)</h2>
          <div className="toolbar__dropdown-main" onClick={this.openDropdown}>All Recordings
            <ul className="toolbar__dropdown">
              <li className="toolbar__dropdown-item">Today's Recordings</li>
              <li className="toolbar__dropdown-item">Last Week's Recordings</li>
              <li className="toolbar__dropdown-item">Last Month's Recordings</li>
              <li className="toolbar__dropdown-item">Last Year's Recordings</li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="56" viewBox="359 222 80 56">
              <path fill="#D8D8D8" fill-rule="evenodd" stroke="#D8D8D8" stroke-width="3" d="M399 224l38 52h-76z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="toolbar__search">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="58" viewBox="492 204 54 58">
              <path fill="none" stroke="#979797" stroke-width="5" d="M516 249c11.59798 0 21-9.40202 21-21s-9.40202-21-21-21-21 9.40202-21 21 9.40202 21 21 21zm12-3.243383L538.744733 258 542 255.243383 531.255267 243 528 245.756617z" stroke-linecap="round"/>
            </svg>
            <input type="text" placeholder="Search Recordings" />
          </div>
        </div>
        <div className="toolbar__right-content">
          <div className="toolbar__filter" onClick={this.openFilterDropdown}>
            Filter by <span className="toolbar__filter--selected">All</span>
            <ul className="toolbar__filter-dropdown">
              <li className="toolbar__filter-dropdown-item">Started by you</li>
              <li className="toolbar__filter-dropdown-item">More than an hour</li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="56" viewBox="359 222 80 56">
              <path fill="#D8D8D8" fill-rule="evenodd" stroke="#D8D8D8" stroke-width="3" d="M399 224l38 52h-76z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    )
  }
};

export default Toolbar;
