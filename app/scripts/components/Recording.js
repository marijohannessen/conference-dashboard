const React = require('react');

class Recording extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li className="recording">
        <ul className="recording-items">
          <li className="recording-items__play">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="56" viewBox="359 222 80 56">
              <path fill="#D8D8D8" fill-rule="evenodd" stroke="#D8D8D8" stroke-width="3" d="M399 224l38 52h-76z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </li>
          <li className="recording-items__title">
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
          </li>
          <li className="recording-items__duration">
            <h3>{this.props.duration}</h3>
          </li>
          <li className="recording-items__date">
            <h3>{this.props.date}</h3>
          </li>
          <li className="recording-items__status">
            <div className="status-main">
              Private
              <ul className="status-dropdown">
                <li className="status-dropdown-item">Private</li>
                <li className="status-dropdown-item">Public</li>
              </ul>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="56" viewBox="359 222 80 56">
                <path fill="#D8D8D8" fill-rule="evenodd" stroke="#D8D8D8" stroke-width="3" d="M399 224l38 52h-76z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </li>
          <li className="recording-items__dial-in">
            <input type="checkbox" value="none" id="dial-in" name="check" checked />
            <label for="dial-in"></label>
            Yes
          </li>
          <li className="recording-items__tools">
            <ul className="tools-list">
              <li className="tools-list__item">
                <svg width="472px" height="437px" viewBox="0 0 472 437" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g id="Group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M457.7,213.15 C450.2,213.15 444.2,219.15 444.2,226.65 L444.2,349.45 C444.2,382.85 417,409.95 383.7,409.95 L87.5,409.95 C54.1,409.95 27,382.75 27,349.45 L27,224.65 C27,217.15 21,211.15 13.5,211.15 C6,211.15 0,217.15 0,224.65 L0,349.45 C0,397.75 39.3,436.95 87.5,436.95 L383.7,436.95 C432,436.95 471.2,397.65 471.2,349.45 L471.2,226.65 C471.2,219.25 465.2,213.15 457.7,213.15 L457.7,213.15 Z" id="Shape" fill="#000000"></path>
                    <path d="M226.1,329.75 C228.7,332.35 232.2,333.75 235.6,333.75 C239,333.75 242.5,332.45 245.1,329.75 L330.9,243.95 C336.2,238.65 336.2,230.15 330.9,224.85 C325.6,219.55 317.1,219.55 311.8,224.85 L249.1,287.65 L249.1,13.75 C249.1,6.25 243.1,0.25 235.6,0.25 C228.1,0.25 222.1,6.25 222.1,13.75 L222.1,287.65 L159.3,224.85 C154,219.55 145.5,219.55 140.2,224.85 C134.9,230.15 134.9,238.65 140.2,243.95 L226.1,329.75 L226.1,329.75 Z" id="Shape" fill="#000000"></path>
                  </g>
                </svg>
              </li>
              <li className="tools-list__item">
                <svg width="455px" height="482px" viewBox="0 0 455 482" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path d="M368.6,309.4 C340.9,309.4 316.2,322.6 300.4,343 L168.1,269.1 C171.2,260.2 172.9,250.6 172.9,240.7 C172.9,230.7 171.2,221.2 168,212.2 L300.2,138.4 C315.9,158.9 340.7,172.2 368.5,172.2 C415.9,172.2 454.6,133.6 454.6,86.1 C454.6,38.6 416,0 368.5,0 C321,0 282.4,38.6 282.4,86.1 C282.4,96.1 284.1,105.7 287.3,114.6 L155.2,188.4 C139.5,167.8 114.7,154.6 86.9,154.6 C39.5,154.6 0.8,193.2 0.8,240.7 C0.8,288.2 39.5,326.8 87,326.8 C114.8,326.8 139.6,313.5 155.4,292.9 L287.6,366.8 C284.4,375.8 282.6,385.5 282.6,395.5 C282.6,442.9 321.2,481.6 368.7,481.6 C416.2,481.6 454.8,443 454.8,395.5 C454.8,348 416.1,309.4 368.6,309.4 L368.6,309.4 Z M368.6,27.1 C401.2,27.1 427.7,53.6 427.7,86.2 C427.7,118.8 401.2,145.3 368.6,145.3 C336,145.3 309.5,118.8 309.5,86.2 C309.5,53.6 336.1,27.1 368.6,27.1 L368.6,27.1 Z M87,299.8 C54.4,299.8 27.9,273.3 27.9,240.7 C27.9,208.1 54.4,181.6 87,181.6 C119.6,181.6 146.1,208.1 146.1,240.7 C146.1,273.3 119.5,299.8 87,299.8 L87,299.8 Z M368.6,454.5 C336,454.5 309.5,428 309.5,395.4 C309.5,362.8 336,336.3 368.6,336.3 C401.2,336.3 427.7,362.8 427.7,395.4 C427.7,428 401.2,454.5 368.6,454.5 L368.6,454.5 Z" id="Shape" stroke="none" fill="#000000" fill-rule="evenodd"></path>
                </svg>
              </li>
              <li className="tools-list__item">

                <svg width="613px" height="775px" viewBox="0 0 613 775" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g id="Group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M559.35,91.169 L455.971,91.169 L455.971,23.991 C455.971,10.469 445.064,0 431.543,0 C430.231,0 429.356,0.438 428.929,0.875 C428.491,0.438 427.616,0 427.179,0 L184.212,0 L182.472,0 L180.722,0 C167.201,0 156.732,10.469 156.732,23.991 L156.732,91.17 L52.916,91.17 C23.249,91.17 0.133,114.286 0.133,143.953 L0.133,182.34 L0.133,230.321 L45.936,230.321 L45.936,721.921 C45.936,751.589 68.615,774.267 98.282,774.267 L513.985,774.267 C543.652,774.267 566.767,751.589 566.767,721.921 L566.767,230.321 L612.133,230.321 L612.133,182.34 L612.133,143.953 C612.133,114.286 589.008,91.169 559.35,91.169 L559.35,91.169 Z M204.713,47.981 L407.553,47.981 L407.553,91.169 L204.713,91.169 L204.713,47.981 L204.713,47.981 Z M518.349,721.922 C518.349,724.983 517.037,726.285 513.985,726.285 L98.282,726.285 C95.23,726.285 93.918,724.982 93.918,721.922 L93.918,230.32 L518.349,230.32 L518.349,721.922 L518.349,721.922 Z M563.715,182.339 L48.551,182.339 L48.551,143.952 C48.551,140.899 49.863,139.15 52.915,139.15 L559.35,139.15 C562.403,139.15 563.715,140.899 563.715,143.952 L563.715,182.339 L563.715,182.339 Z" id="Shape" fill="#000000"></path>
                    <rect id="Rectangle-path" fill="#000000" x="394.031" y="286.593" width="48.418" height="396.942"></rect>
                    <rect id="Rectangle-path" fill="#000000" x="282.361" y="286.593" width="48.418" height="396.942"></rect>
                    <rect id="Rectangle-path" fill="#000000" x="170.69" y="286.593" width="48.418" height="396.942"></rect>
                  </g>
                </svg>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    )
  }
};

export default Recording;
