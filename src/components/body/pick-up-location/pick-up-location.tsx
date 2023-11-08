import React from "react";

import "./pick-up-location.css";

class PickUpLocation extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="input-form">
        <label className="text-sm text-color3">Pick up location</label>
        <select name="" id="">
          <option
            disabled
            selected
            hidden
            value=""
            className="text-sm text-color4"
          >
            Select pick up location
          </option>
        </select>
      </div>
    );
  }
}

export default PickUpLocation;
