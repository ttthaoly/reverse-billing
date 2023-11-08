import React from "react";

import "./footer.css";

import footer from "../../assets/icon/footer.svg";
class Footer extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <span className="text-color5">Powered by</span>
        <img src={footer} alt="Quincus" />
      </>
    );
  }
}

export default Footer;
