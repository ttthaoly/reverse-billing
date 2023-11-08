import React from "react";

import { type } from "os";
import { vendorType } from "../../../../types/reversebilling";
import "./vendor.css";

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
      <td className="vendor">
        <span className="text-sm text-color3">{`${vendorType?.nameVendor}`}</span>
        <span className="text-sm text-color6">{`${vendorType?.codeVendor}`}</span>
      </td>
    );
  }
}

export default Vendor;
