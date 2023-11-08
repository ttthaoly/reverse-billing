import React from "react";

import { type } from "os";
import { statusType } from "../../../../types/reversebilling";
import "./status.css";
import dot from "../../../../assets/icon/dot.svg";

type Statusprop = {
  statusType?: statusType;
};

class Status extends React.Component<Statusprop> {
  constructor(props: Statusprop) {
    super(props);
    this.state = {};
  }

  render() {
    const { statusType } = this.props;
    return (
      <>
        <td className="status">
          <img src={dot} alt="dot" />
          <span className="text-sm text-color3">{`${statusType?.status}`}</span>
        </td>
      </>
    );
  }
}

export default Status;
