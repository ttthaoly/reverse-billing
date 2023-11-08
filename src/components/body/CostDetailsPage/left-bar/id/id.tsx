import React from "react";

import { type } from "os";
import { idType } from "../../../../../types/reversebilling";
import link from "../../../../../assets/icon/Link Out External.svg";

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
      <div>
        <span className="text-xs text-color6">Order ID</span>
        <div className="link">
          <a className="text-base text-color8">{`${idType?.order}`}</a>
          <img src={link} alt="" />
        </div>
      </div>
    );
  }
}

export default ID;
