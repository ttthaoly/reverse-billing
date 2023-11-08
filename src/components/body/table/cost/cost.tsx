import React from "react";

import { type } from "os";
import { costType } from "../../../../types/reversebilling";
import "./cost.css";

type Costprop = {
  costType?: costType;
};

class Cost extends React.Component<Costprop> {
  constructor(props: Costprop) {
    super(props);
    this.state = {};
  }

  render() {
    const { costType } = this.props;
    return (
      <td className="cost">
        <span className="text-sm text-color3">{`${costType?.price}`}</span>
        <span className="text-sm text-color6">{`${costType?.usd}`}</span>
      </td>
    );
  }
}

export default Cost;
