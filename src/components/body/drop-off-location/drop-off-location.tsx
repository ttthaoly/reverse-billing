import React from "react";

import "./drop-off-location.css";

class DropOffLocation extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="input-form">
        <label className="text-sm text-color3">Drop off location</label>
        <select name="" id="">
          <option
            disabled
            selected
            hidden
            value=""
            className="text-sm text-color4"
          >
            Select drop off location
          </option>
        </select>
      </div>
    );
  }
}

export default DropOffLocation;
