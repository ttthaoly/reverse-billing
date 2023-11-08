import React from "react";

import "./financial-status.css";

class FinancialStatus extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="input-form">
        <label className="text-sm text-color3">Financial status</label>
        <select name="" id="">
          <option
            disabled
            selected
            hidden
            value=""
            className="text-sm text-color4"
          >
            Select financial status
          </option>
        </select>
      </div>
    );
  }
}

export default FinancialStatus;
