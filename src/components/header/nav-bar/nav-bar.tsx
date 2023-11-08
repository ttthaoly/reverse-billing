import React from "react";

import "./nav-bar.css";


import Overview from "../../../assets/icon/Overview.svg";
import Admin from "../../../assets/icon/Admin.svg";
import ArrowChevron from "../../../assets/icon/Arrow Chevron.svg";
import Qcomms from "../../../assets/icon/Qcomms.svg";
import Order from "../../../assets/icon/Order.svg";
import Shipment from "../../../assets/icon/Shipment.svg";
import Network from "../../../assets/icon/Network Management Allocation Matrix.svg";
import Dispatch from "../../../assets/icon/Dispatch.svg";
import QFinance from "../../../assets/icon/Q-Finance.svg";
import vendor from "../../../assets/icon/vendor.svg";
import Settings from "../../../assets/icon/Settings Cog.svg";
import Analytics from "../../../assets/icon/Analytics.svg";
import OtherCostCapture from "../../../assets/icon/Other Cost Capture.svg";
import CODCollection from "../../../assets/icon/COD Collection.svg";
import CostRepository from "../../../assets/icon/Cost Repository.svg";
import RevenueCollection from "../../../assets/icon/Revenue Collection.svg";

class NavBar extends React.Component<{}, { display: string; mode: string }> {
  constructor(props: any) {
    super(props);
    this.state = { mode: "ON", display: "none" };
  }
  handleClickVendor = () => {
    if (this.state.mode === "ON") {
      this.setState({
        display: "flex",
        mode: "OFF",
      });
    } else {
      this.setState({
        display: "none",
        mode: "ON",
      });
    }
  };
  render() {
    const { display } = this.state;
    return (
      <div className="nav-bar">
        <ul className="items" id="items">
          <li className="item">
            <a className="Overview" href="#home">
              <div>
                <img src={Overview} alt="" />
                <span className="font text-xs text-color1">Overview</span>
              </div>
            </a>
          </li>
          <li className="item">
            <a className="Admin" href="#home">
              <div>
                <img src={Admin} alt="Admin" />
                <span className="font text-xs text-color1">Admin</span>
              </div>
              <img src={ArrowChevron} alt="Arrow Chevron" />
            </a>
          </li>
          <li className="item">
            <a className="Comm-Centre" href="#home">
              <div>
                <img src={Qcomms} alt="Comm Centre" />
                <span className="font text-xs text-color1">Comm Centre</span>
              </div>
            </a>
          </li>
          <li className="item">
            <a className="Order" href="#home">
              <div>
                <img src={Order} alt="Order" />
                <span className="font text-xs text-color1">Order</span>
              </div>
              <img src={ArrowChevron} alt="Arrow Chevron" />
            </a>
          </li>
          <li className="item">
            <a className="Shipment" href="#home">
              <div>
                <img src={Shipment} alt="Shipment" />
                <span className="font text-xs text-color1">Shipment</span>
              </div>
              <img src={ArrowChevron} alt="Arrow Chevron" />
            </a>
          </li>
          <li className="item">
            <a className="Network" href="#home">
              <div>
                <img src={Network} alt="Network" />
                <span className="font text-xs text-color1">Network</span>
              </div>
              <img src={ArrowChevron} alt="Arrow Chevron" />
            </a>
          </li>
          <li className="item">
            <a className="Dispatch" href="#home">
              <div>
                <img src={Dispatch} alt="Dispatch" />
                <span className="font text-xs text-color1">Dispatch</span>
              </div>
              <img src={ArrowChevron} alt="Arrow Chevron" />
            </a>
          </li>
          <li className="item">
            <a className="Customer-pricing" href="#home">
              <div>
                <img src={QFinance} alt="Customer pricing" />
                <span className="font text-xs text-color1">
                  Customer pricing
                </span>
              </div>
              <img src={ArrowChevron} alt="Arrow Chevron" />
            </a>
          </li>
          <li className="item">
            <a
              className="Vendor-costing"
              href="#home"
              onClick={this.handleClickVendor}
            >
              <div>
                <img src={vendor} alt="Vendor costing" />
                <span className="font text-xs text-color1">Vendor costing</span>
              </div>
              <img src={ArrowChevron} alt="ArrowChevron" />
            </a>
          </li>
          <div className="menu-Vendor-costing" style={{ display }}>
            <li className="item">
              <a className="Vendor-costing" href="#home">
                <div>
                  <img src={OtherCostCapture} alt="OtherCostCapture" />
                  <span className="font text-xs text-color1">Cost rates</span>
                </div>
              </a>
            </li>
            <li className="item">
              <a className="Vendor-costing" href="#home">
                <div>
                  <img src={CODCollection} alt="CODCollection" />
                  <span className="font text-xs text-color1">
                    Additional cost rates
                  </span>
                </div>
              </a>
            </li>
            <li className="item">
              <a className="Vendor-costing" href="#home">
                <div>
                  <img src={CostRepository} alt="CostRepository" />
                  <span className="font text-xs text-color1">
                    Cost repository
                  </span>
                </div>
              </a>
            </li>
            <li className="item">
              <a className="Vendor-costing" href="#home">
                <div>
                  <img src={RevenueCollection} alt="RevenueCollection" />
                  <span className="font text-xs text-color1">
                    Reverse billing report
                  </span>
                </div>
              </a>
            </li>
          </div>
          <li className="item">
            <a className="Financial-setting" href="#home">
              <div>
                <img src={Settings} alt="Financial setting" />
                <span className="font text-xs text-color1">
                  Financial setting
                </span>
              </div>
            </a>
          </li>
          <li className="item">
            <a className="Analytics" href="#home">
              <div>
                <img src={Analytics} alt="Analytics" />
                <span className="font text-xs text-color1">Analytics</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
