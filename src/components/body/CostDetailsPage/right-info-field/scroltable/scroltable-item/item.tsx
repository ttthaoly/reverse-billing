import React from "react";

import { type } from "os";
import {itemTableType} from "../../../../../../types/reversebillingDescription";

type Itemprop = {
  itemTableType?: itemTableType;
};

class Item extends React.Component<Itemprop> {
  constructor(props: Itemprop) {
    super(props);
    this.state = {};
  }

  render() {
    const { itemTableType } = this.props;
    return <>{`${itemTableType?.itemTable}`}</>;
  }
}

export default Item;
