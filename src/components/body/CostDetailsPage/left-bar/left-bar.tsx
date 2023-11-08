import React from "react";

import "./left-bar.css";
import ReversebillingType from "../../../../types/reversebilling";
import PickupDropOffInfo from "../../CostDetailsPage/left-bar/dropoff/dropoff";
import ID from "../../CostDetailsPage/left-bar/id/id";
import Details from "../../CostDetailsPage/left-bar/details/details";
import Vendor from "../../CostDetailsPage/left-bar/vendor/vendor";
import LastUpdate from "../../CostDetailsPage/left-bar/lastupdate/lastupdate";
import { variables } from "../../../../context";
import link from "../../../../assets/icon/Link Out External.svg";

type LeftBarprop = {
  data: ReversebillingType[];
};
type LeftBarState = {};
class LeftBar extends React.Component<LeftBarprop, LeftBarState> {
  constructor(props: LeftBarprop) {
    super(props);
    this.state = {
      // data: [],
    };
  }
  itemIndex = (index: number) => {
    const value =
      this.props.data.filter((item, index) => index === index) || [];
    console.log("value1", value);
  };

  render() {
    // const { pickUpdropOffType } = this.props;
    const { data } = this.props;
    console.log("ok");
    return (
      <variables.Consumer>
        {({ index }) => {
          const value = data.filter((item, ind) => ind == index) || [];
          console.log("value1", value);
          console.log("index", index);
          return (
            <div className="left-bar">
              {value.map((item, index) => {
                console.log("item", item.pickUp_dropOff);
                console.log("index", index);
                return (
                  <div key={index}>
                    <div className="pickup-dropoff">
                      <PickupDropOffInfo
                        pickUpdropOffType={item.pickUp_dropOff}
                      />
                    </div>
                    <div className="info">
                      <ID idType={item?.id || ""} />
                      <Details detailsType={item.details} />

                      <div>
                        <span className="text-xs text-color6">Vendor</span>
                        <div className="link">
                          <span className="text-base text-color8">
                            <Vendor vendorType={item.vendor} />
                          </span>
                          <img src={link} alt="" />
                        </div>
                      </div>
                      <div className="text">
                        <span className="text-xs text-color6">
                          Order service type
                        </span>
                        <span className="text-base text-color3">Express</span>
                      </div>
                      <LastUpdate lastUpdateType={item.lastUpdate} />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }}
      </variables.Consumer>
    );
  }
}

export default LeftBar;
