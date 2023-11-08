import React from "react";

// import "../css/normalize.css";
// import "../css/normalize.css";
// import "../css/utilities.css";
// import "../css/reset.css";
// import "../css/main.css";
import "./cost-respository.css";

// import Content from "../assets/icon/Content.svg";
// import Quincus from "../assets/icon/footer.svg";
class CostRespository extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      // expanded: false, display: "none"
    };
  }
  // showCheckboxes = () => {
  //   console.log("ok");
  //   if (this.state.expanded === false) {
  //     this.setState({
  //       display: "flex",
  //       expanded: true,
  //     });
  //   } else {
  //     this.setState({
  //       display: "none",
  //       expanded: false,
  //     });
  //   }
  // };
  render() {
    // const { display } = this.state;
    return (
      <div className="body">
        <div className="Cost-repository">
          <span className="text-lg text-color2">Cost repository</span>
          <div className="background-cost-repository">
            <div className="info-cost-repository">
              <div className="search">
                {/* <span className="text-sm text-color3">
                  Search by order/shipment ID/AWB
                </span>
                <div className="search-bar">
                  <textarea
                    name=""
                    id=""
                    placeholder="Use a comma (,) for multiple IDs"
                  ></textarea>
                  <button>
                    <img src={Content} alt="" />
                  </button>
                </div> */}
              </div>
              <div className="search-criteria">
                <span className="text-sm text-color3">Search criteria</span>
                <div className="select-top">
                  {/* <div className="input-form">
                    <label className="text-sm text-color3">
                      Vendor account
                    </label>
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
                            <span className="text-sm text-color3">
                              JPL Logistics
                            </span>
                            <span className="text-xs text-color6">JPL01</span>
                          </div>
                        </label>
                        <label htmlFor="" className="menu-action">
                          <input type="checkbox" id="" />
                          <div className="info">
                            <span className="text-sm text-color3">
                              MegaWorld Traders
                            </span>
                            <span className="text-xs text-color6">MGW31</span>
                          </div>
                        </label>
                        <label htmlFor="" className="menu-action">
                          <input type="checkbox" id="" />
                          <div className="info">
                            <span className="text-sm text-color3">
                              SeaTrade Producers
                            </span>
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
                  </div> */}
                  {/* <div className="input-form">
                    <label className="text-sm text-color3">
                      Financial status
                    </label>
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
                  </div> */}
                  {/* <div className="input-form">
                    <label className="text-sm text-color3">
                      Order service type
                    </label>
                    <select name="" id="">
                      <option
                        disabled
                        selected
                        hidden
                        value=""
                        className="text-sm text-color4"
                      >
                        Select order service type
                      </option>
                    </select>
                  </div> */}
                </div>
                <div className="select-bot">
                  {/* <div className="input-form">
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
                  </div> */}
                  {/* <div className="input-form">
                    <label className="text-sm text-color3">
                      Pick up location
                    </label>
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
                  </div> */}
                  {/* <div className="input-form">
                    <label className="text-sm text-color3">
                      Drop off location
                    </label>
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
                  </div> */}
                </div>
              </div>
            </div>
            <div className="button">
              {/* <button className="btn btn-solid2">Reset</button>
              <button className="btn btn-solid1">Search</button> */}
            </div>
          </div>
        </div>
        <div className="footer">
          {/* <span className="text-color5">Powered by</span>
          <img src={Quincus} alt="Quincus" /> */}
        </div>
      </div>
    );
  }
}

export default CostRespository;
