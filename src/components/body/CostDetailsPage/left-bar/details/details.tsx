import React from "react";

import { type } from "os";
import { detailsType } from "../../../../../types/reversebilling";

type Detailsprop = {
  detailsType?: detailsType;
};

class Details extends React.Component<Detailsprop> {
  constructor(props: Detailsprop) {
    super(props);
    this.state = {};
  }

  render() {
    const { detailsType } = this.props;
    return (
      <div>
        <span className="text-xs text-color6">Order booked date</span>
        <div>
          <span className="text-base text-color3">{`${detailsType?.booked}`}</span>
          <span className="text-xs text-color6">{`${detailsType?.utc}`}</span>
        </div>
      </div>
    );
  }
}

export default Details;
