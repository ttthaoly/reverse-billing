import React from "react";

import { costType } from "../../../../../types/reversebilling";

type Currencyprop = {
  costType?: costType;
};

class Currency extends React.Component<Currencyprop> {
  constructor(props: Currencyprop) {
    super(props);
    this.state = {};
  }

  render() {
    const { costType } = this.props;
    return <span className="text-xxl text-color9">{`${costType?.price}`}</span>;
  }
}

export default Currency;
