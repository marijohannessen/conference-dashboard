const React = require('react');

class ProfileInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  openDropdown = () => {
    const dropdown = document.querySelector('.profile-info__dropdown');
    const username = document.querySelector('.profile-info__username');
    dropdown.classList.toggle('open');
    username.classList.toggle('open');
  }

  render() {

    return (
      <div className="profile-info">
        <div className="profile-info__dropdown--trigger" onClick={this.openDropdown}>
          <p className="profile-info__username">John Appleseed</p>
          <div className="profile-info__avatar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58">
              <circle cx="29" cy="29" r="29" fill="#424A60"/>
              <path d="M52.932 45.376C52.275 38.985 46.876 34 40.311 34h-5.946C33.611 34 33 33.389 33 32.635v-.645c0-.583.379-1.082.925-1.287 5.804-2.182 9.778-11.704 8.971-18.433C42.134 5.919 36.97.801 30.614.09c-.517-.058-1.029-.086-1.535-.088-.016 0-.032-.001-.048-.001C21.285-.016 15 6.258 15 14c0 6.024 3.807 14.755 9.145 16.729.523.193.855.713.855 1.271v.635c0 .754-.611 1.365-1.365 1.365h-5.946c-6.565 0-11.964 4.985-12.621 11.376C10.293 52.998 19.061 58 29 58s18.707-5.002 23.932-12.624z" fill="#FBCE9D"/>
              <path d="M33.492 6.61c3.715 1.021 7.213 3.306 9.453 6.322-.016-.221-.023-.447-.049-.663C42.134 5.919 36.97.801 30.614.09c-.517-.058-1.029-.086-1.535-.088-.016 0-.032-.001-.048-.001-6.92-.015-12.66 4.995-13.808 11.583h.005c.179.252.354.507.545.75.07-.087.141-.173.213-.258 2-2.38 5.341-2.931 8.183-1.671.865.382 1.823.595 2.831.595 2.942 0 5.456-1.818 6.492-4.39z" fill="#6C797A"/>
              <path d="M52.932 45.376C52.275 38.985 46.875 34 40.311 34H39l-6 6h-8l-3-2-3.429-4h-.882c-6.564 0-11.964 4.985-12.621 11.376C10.293 52.998 19.061 58 29 58s18.707-5.002 23.932-12.624z" fill="#E7ECED"/>
              <path d="M43 54.392c.685-.379 1.35-.789 2-1.22V47h-2v7.392zM15 54.392V47h-2v6.172c.65.431 1.315.841 2 1.22z" fill="#CCD5D6"/>
              <path fill="#38454F" d="M26 38h6v6h-6z"/>
              <path d="M24.961 57.714c1.32.184 2.668.286 4.039.286 1.382 0 2.739-.103 4.069-.29L31 44h-4l-2.039 13.714z" fill="#546A79"/>
              <path d="M26 38.8L22 34h-4.856c-.069 0-.116.07-.091.134L21 44l5-3.333V38.8zM40.856 34H36l-4 4.8v1.867L37 44l3.946-9.866c.026-.064-.021-.134-.09-.134z" fill="#FFF"/>
            </svg>
          </div>
        </div>
        <ul className="profile-info__dropdown">
          <li className="profile-info__dropdown-item">Account</li>
          <li className="profile-info__dropdown-item">Settings</li>
          <li className="profile-info__dropdown-item">Help</li>
          <li className="profile-info__dropdown-item">Log out</li>
        </ul>
      </div>
    )
  }
};

export default ProfileInfo;
