import React from "react";

import "./profile-avatar.css";
import Avatar from "../../../assets/icon/Avatar.svg";
class ProfileAvatar extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profile-avatar">
        <a href="#home" className="">
          <img src={Avatar} alt="Avatar" />
          <div className="text-wrapper">
            <span className="font text-xs text-color1">Manag Tango</span>
            <span className="font text-xxs text-color7">Admin</span>
          </div>
        </a>
      </div>
    );
  }
}

export default ProfileAvatar;
