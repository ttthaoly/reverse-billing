import React from "react";

import { type } from "os";
import { priceType } from "../../../../../../types/reversebillingDescription";

type Priceprop = {
  priceType?: priceType;
};

class Price extends React.Component<Priceprop> {
  constructor(props: Priceprop) {
    super(props);
    this.state = {};
  }

  render() {
    const { priceType } = this.props;
    return <>{`${priceType?.price}`}</>;
  }
}

export default Price;
