import React from "react";

import { type } from "os";
import { pickUpdropOffType } from "../../../../../types/reversebilling";
import dropoff from "../../../../../assets/icon/Group 25099.svg";
import pickup from "../../../../../assets/icon/Group 25098.svg";
import detail from "../../../../../assets/icon/Ellipse 424.svg";
import "./dropoff.css";

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
      <>
        <div className="pick-up">
          <div className="img">
            <img className="pickup" src={pickup} alt="pickup" />
            <img className="detail" src={detail} alt="detail" />
            <img className="detail" src={detail} alt="detail" />
            <img className="detail" src={detail} alt="detail" />
            <img className="detail" src={detail} alt="detail" />
          </div>
          <div className="text-pickup">
            <span className="text-base text-color8">Pick up</span>
            <span className="text-xl text-color2">{`${pickUpdropOffType?.a}`}</span>
            <span className="text-base text-color6">Selangor, Malaysia</span>
          </div>
        </div>
        <div className="pick-up">
          <div className="img">
            <img className="dropoff" src={dropoff} alt="dropoff" />
          </div>
          <div className="text-dropoff">
            <span className="text-base text-color8">Drop off</span>
            <span className="text-xl text-color2">{`${pickUpdropOffType?.b}`}</span>
            <span className="text-base text-color6">Johor, Malaysia</span>
          </div>
        </div>
      </>
    );
  }
}

export default PickUpdropOff;
