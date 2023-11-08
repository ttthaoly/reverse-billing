import React from "react";

import "./CostDetailsPage.css";
import SecondaryNav from "./secondary-nav/secondary-nav";
import LeftBar from "./left-bar/left-bar";
import RightInfoField from "./right-info-field/right-info-field";
import { ReverseBilling } from "../../../data/reverseBilling";

class CostDetailsPage extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cost-details-page">
        <SecondaryNav />
        <div className="">
          <LeftBar data={ReverseBilling} />
          <RightInfoField data={ReverseBilling} width={undefined}/>
        </div>
      </div>
    );
  }
}

export default CostDetailsPage;
