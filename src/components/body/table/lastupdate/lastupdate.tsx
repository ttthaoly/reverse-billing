import React from "react";

import { type } from "os";
import { lastUpdateType } from "../../../../types/reversebilling";
import "./lastupdate.css";

type LastUpdateprop = {
  lastUpdateType?: lastUpdateType;
};

class LastUpdate extends React.Component<LastUpdateprop> {
  constructor(props: LastUpdateprop) {
    super(props);
    this.state = {};
  }

  render() {
    const { lastUpdateType } = this.props;
    return (
      <>
        <td className="lastupdate">
          <span className="text-sm text-color3">{`${lastUpdateType?.date}`}</span>
          <span className="text-sm text-color6">{`${lastUpdateType?.by}`}</span>
        </td>
      </>
    );
  }
}

export default LastUpdate;
