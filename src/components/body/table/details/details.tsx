import React from "react";

import { type } from "os";
import { detailsType } from "../../../../types/reversebilling";
import qty from "../../../../assets/icon/Qty.svg";
import "./details.css";

type Detailprop = {
  value?: detailsType;
};

class Details extends React.Component<Detailprop> {
  constructor(props: Detailprop) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;
    return (
      <td className="details">
        <div>
          <span className="text-sm text-color6">{`Transport`}</span>
          <div className="qty">
            <span className="text-sm text-color6">{`Qty`}</span>
            <img src={qty} alt="qty" />
          </div>
          <span className="text-sm text-color6">{`Booked`}</span>
          <span className="text-sm text-color1">{`Booked`}</span>
        </div>
        <div>
          <span className="text-color6">{`:`}</span>
          <span className="text-color6">{`:`}</span>
          <span className="text-color6">{`:`}</span>
          <span className="text-color1">{`:`}</span>
        </div>
        <div>
          <span className="text-sm text-color3">{`${value?.transport}`}</span>
          <span className="text-sm text-color3">{`${value?.qty}`}</span>
          <span className="text-sm text-color3">{`${value?.booked}`}</span>
          <span className="text-xs text-color6">{`${value?.utc}`}</span>
        </div>
      </td>
    );
  }
}

export default Details;
