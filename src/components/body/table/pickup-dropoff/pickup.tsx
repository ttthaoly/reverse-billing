import React from "react";

import { type } from "os";
import { pickUpdropOffType } from "../../../../types/reversebilling";
import "./pickup.css";

type PickUpdropOffprop = {
  pickUpdropOffType?: pickUpdropOffType;
};

class PickUpdropOff extends React.Component<PickUpdropOffprop> {
  constructor(props: PickUpdropOffprop) {
    super(props);
    this.state = {};
  }

  render() {
    const { pickUpdropOffType } = this.props;
    return (
      <td className="time">
        <span className="text-sm text-color3">{`${pickUpdropOffType?.a}`}</span>
        <span className="text-sm text-color3">{`${pickUpdropOffType?.b}`}</span>
      </td>
    );
  }
}

export default PickUpdropOff;
