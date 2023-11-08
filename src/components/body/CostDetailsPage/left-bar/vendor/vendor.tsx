import React from "react";

import { type } from "os";
import { vendorType } from "../../../../../types/reversebilling";
import link from "../../../../../assets/icon/Link Out External.svg";

type Vendorprop = {
  vendorType?: vendorType;
};

class Vendor extends React.Component<Vendorprop> {
  constructor(props: Vendorprop) {
    super(props);
    this.state = {};
  }

  render() {
    const { vendorType } = this.props;
    return (
      <a>{`${vendorType?.nameVendor}`}</a>
    );
  }
}

export default Vendor;
