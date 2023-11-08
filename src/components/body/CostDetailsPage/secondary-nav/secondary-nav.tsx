import React from "react";

import "./secondary-nav.css";
import leftarrow from "../../../../assets/icon/back.svg";
import menu from "../../../../assets/icon/Hamburger Menu.svg";
import back from "../../../../assets/icon/Left arrow.svg";

class SecondaryNav extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="secondary-nav">
        <img className="menu" src={menu} alt="menu" />
        <img className="leftarrow" src={leftarrow} alt="leftarrow" />
        <div className="back">
          <img src={back} alt="back" />
          <span className="text-sm text-color1">Back</span>
        </div>
      </div>
    );
  }
}

export default SecondaryNav;
