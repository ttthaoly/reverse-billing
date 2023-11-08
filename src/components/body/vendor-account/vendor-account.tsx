import React from "react";

import "./vendor-account.css";

class VendorAccount extends React.Component<
  {},
  { expanded: boolean; display: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { expanded: false, display: "none" };
  }
  showCheckboxes = () => {
    console.log("ok");
    if (this.state.expanded === false) {
      this.setState({
        display: "flex",
        expanded: true,
      });
    } else {
      this.setState({
        display: "none",
        expanded: false,
      });
    }
  };
  render() {
    const { display } = this.state;
    return (
      <div className="input-form">
        <label className="text-sm text-color3">Vendor account</label>
        <div className="selectBox" onClick={this.showCheckboxes}>
          <select name="" id="">
            <option
              disabled
              selected
              hidden
              value=""
              className="text-sm text-color4"
            >
              Select vendor account
            </option>
          </select>
        </div>
        <div id="dropdown-menu" style={{ display }}>
          <div>
            <label htmlFor="" className="menu-action">
              <input type="checkbox" id="" />
              <div className="info">
                <span className="text-sm text-color3">JPL Logistics</span>
                <span className="text-xs text-color6">JPL01</span>
              </div>
            </label>
            <label htmlFor="" className="menu-action">
              <input type="checkbox" id="" />
              <div className="info">
                <span className="text-sm text-color3">MegaWorld Traders</span>
                <span className="text-xs text-color6">MGW31</span>
              </div>
            </label>
            <label htmlFor="" className="menu-action">
              <input type="checkbox" id="" />
              <div className="info">
                <span className="text-sm text-color3">SeaTrade Producers</span>
                <span className="text-xs text-color6">VM98</span>
              </div>
            </label>
            <label htmlFor="" className="menu-action">
              <input type="checkbox" id="" />
              <div className="info">
                <span className="text-sm text-color3">
                  Continental Imports Inc.
                </span>
                <span className="text-xs text-color6">CI22</span>
              </div>
            </label>
            <label htmlFor="" className="menu-action">
              <input type="checkbox" id="" />
              <div className="info">
                <span className="text-sm text-color3">
                  GlobalWise Trading Co.
                </span>
              </div>
            </label>
            <label htmlFor="" className="menu-action">
              <input type="checkbox" id="" />
              <div className="info">
                <span className="text-sm text-color3">
                  Oceanic Import Export Inc.
                </span>
                <span className="text-xs text-color6">OIE22</span>
              </div>
            </label>
            <label htmlFor="" className="menu-action">
              <input type="checkbox" id="" />
              <div className="info">
                <span className="text-sm text-color3">
                  EastWest Trade Exchange
                </span>
                <span className="text-xs text-color6">EWT11</span>
              </div>
            </label>
          </div>
          <div className="button-dropdown">
            <button className="btn btn-solid2">Clear</button>
            <button className="btn btn-solid1">Apply</button>
          </div>
        </div>
      </div>
    );
  }
}

export default VendorAccount;
