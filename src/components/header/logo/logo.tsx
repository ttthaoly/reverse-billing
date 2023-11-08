import React from "react";

import "./logo.css";

import Quincus from "../../../assets/icon/Quincus.svg";
import online from "../../../assets/icon/online.svg";
import name from "../../../assets/icon/name.svg";

class Logo extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <a href="#home" className="logo">
        <div className="user">
          <img className="user-name" src={Quincus} alt="Quincus" />
          <img className="stt" src={online} alt="online" />
        </div>
        <img src={name} alt="" />
      </a>
    );
  }
}

export default Logo;
