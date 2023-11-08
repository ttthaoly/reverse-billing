import React from "react";

import "./right-info-field.css";
import Footer from "../../../footer/footer";
import dot from "../../../../assets/icon/Kebab 3 dots Vertical.svg";
import arrow from "../../../../assets/icon/Arrow Chevron3.svg";
import truck from "../../../../assets/icon/Truck Solid.svg";
import dropoff from "../../../../assets/icon/Group 25099.svg";
import pickup from "../../../../assets/icon/Group 25098.svg";
import { variables } from "../../../../context";
import ReversebillingType from "../../../../types/reversebilling";
import ID from "./payment/payment";
import Status from "../../table/status/status";
import Currency from "./currency/currency";
import Vendor from "../../CostDetailsPage/left-bar/vendor/vendor";
import ScrolTable from "./scroltable/scroltable";
import { ReverseBillingDescription } from "../../../../data/reverseBillingDescription";
import Progress from "./progress/progress";

type RightInfoFieldprop = {
  data: ReversebillingType[];
  width: any;
};
type RightInfoFieldState = {};
class RightInfoField extends React.Component<
  RightInfoFieldprop,
  RightInfoFieldState
> {
  constructor(props: RightInfoFieldprop) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <variables.Consumer>
        {({ index }) => {
          const value = data.filter((item, ind) => ind == index) || [];
          console.log("value1", value);
          console.log("index", index);
          return (
            <>
              {value.map((item, index) => {
                console.log("item", item.pickUp_dropOff);
                console.log("index", index);
                return (
                  <div id="container-right-info-field">
                    <div className="right-info-field">
                      <div className="info-field">
                        <div className="payment">
                          <div className="payment-status">
                            <ID idType={item?.id || ""} />
                            <Status statusType={item.status} />
                          </div>
                          <button className="detail">
                            <img src={dot} alt="Kebab 3 dots Vertical" />
                          </button>
                        </div>
                        <div className="tabs">
                          <ul>
                            <li className="tabs-item">
                              <a className="text-sm text-color3" href="">
                                Cost
                              </a>
                            </li>
                            <li className="tabs-item">
                              <a className="text-sm text-color3" href="">
                                Change Log
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="currency">
                          <div className="rate">
                            <span className="text-sm text-color9">
                              Currency: USD
                            </span>
                            <div className="exchange-rate">
                              <button>
                                <span className="text-sm text-color8">
                                  Exchange rate
                                </span>
                                <img src={arrow} alt="" />
                              </button>
                            </div>
                          </div>
                          <div className="total">
                            <span className="text-xxl text-color9">
                              Total:{" "}
                            </span>
                            <Currency costType={item.cost} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="row-vendor">
                            <img src={truck} alt="" />
                            <span className="text-sm text-color3">
                              <Vendor vendorType={item.vendor} />
                            </span>
                          </div>
                          <div className="row-progress">
                            <img src={pickup} alt="" />
                            <div className="progress-container">
                              <Progress width={this.props.width} />
                            </div>
                            <img src={dropoff} alt="" />
                          </div>
                          <div className="row-details">
                            <div className="row-detail">
                              <span className="text-xs text-color3">
                                Pick up
                              </span>
                              <span className="text-base text-color6">
                                7A, Jalan Telawi 2, Bangsar, 59100 Kuala Lumpur,
                                Wilayah Persekutuan Kuala Lumpur, Malaysia
                              </span>
                            </div>
                            <div className="row-detail">
                              <span className="text-xs text-color3">
                                Drop off
                              </span>
                              <span className="text-base text-color6">
                                Jalan Nagasari 22, Bandar Segamat Baru, 85000
                                Segamat District, Johor, Malaysia
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="description-table">
                          <ScrolTable
                            hasDown
                            headerNameList={[
                              <th className="item">
                                <span className="text-sm text-color1">
                                  Item
                                </span>
                              </th>,
                              <th className="description">
                                <span className="text-sm text-color1">
                                  Description
                                </span>
                              </th>,
                              <th className="total"></th>,
                              <th className="price">
                                <span className="text-sm text-color1">
                                  Price (USD)
                                </span>
                              </th>,
                            ]}
                            dataScrolTable={ReverseBillingDescription}
                          />
                        </div>
                      </div>
                      <div className="footer">
                        <Footer />
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          );
        }}
      </variables.Consumer>
    );
  }
}

export default RightInfoField;
