import React from "react";

import { type } from "os";
import "./payment.css";
import { idType, statusType } from "../../../../../types/reversebilling";
import link from "../../../../../assets/icon/Link Out External.svg";
import dot from "../../../../../assets/icon/dot.svg";
import Status from "../../../table/status/status";

type IDoprop = {
  idType?: idType;
};

class ID extends React.Component<IDoprop> {
  constructor(props: IDoprop) {
    super(props);
    this.state = {};
  }

  render() {
    const { idType } = this.props;
    return (
      <div className="id">
        <a className="text-lg text-color2">{`${idType?.a}`}</a>
        <img src={link} alt="" />
      </div>
    );
  }
}

export default ID;
