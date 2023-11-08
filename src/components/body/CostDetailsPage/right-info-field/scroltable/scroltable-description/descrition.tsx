import React from "react";

import { type } from "os";
import {descriptionType} from "../../../../../../types/reversebillingDescription";

type Descriptionprop = {
  descriptionType?: descriptionType;
};

class Description extends React.Component<Descriptionprop> {
  constructor(props: Descriptionprop) {
    super(props);
    this.state = {};
  }

  render() {
    const { descriptionType } = this.props;
    return <>{`${descriptionType?.description}`}</>;
  }
}

export default Description;
