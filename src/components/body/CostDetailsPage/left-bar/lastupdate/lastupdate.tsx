import React from "react";

import { type } from "os";
import { lastUpdateType } from "../../../../../types/reversebilling";
import link from "../../../../assets/icon/Link Out External.svg";


type LastUpdateprop = {
  lastUpdateType?: lastUpdateType;
};

class lastUpdate extends React.Component<LastUpdateprop> {
  constructor(props: LastUpdateprop) {
    super(props);
    this.state = {};
  }

  render() {
    const { lastUpdateType } = this.props;
    return (
      <div className="text">
        <span className="text-xs text-color6">Last updated</span>
        <span className="text-base text-color3">{`${lastUpdateType?.date}`}</span>
      </div>
    );
  }
}

export default lastUpdate;
