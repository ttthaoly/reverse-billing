import React from "react";

import "./calendar.css";

class Calendar extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="input-form">
        <label htmlFor="date" className="text-sm text-color3">
          Booked on
        </label>
        <select name="" id="">
          <option
            disabled
            selected
            hidden
            value=""
            className="text-sm text-color4"
          >
            Select date
          </option>
        </select>
        <span className="form-message"></span>
      </div>
    );
  }
}

export default Calendar;
