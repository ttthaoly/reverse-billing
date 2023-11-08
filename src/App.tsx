import React from "react";
// import CostRespository from "./components/cost-respository/cost-respository";

import "./App.css";
import { variables } from "./context";

import Logo from "./components/header/logo/logo";
import NavBar from "./components/header/nav-bar/nav-bar";
import ProfileAvatar from "./components/header/profile-avatar/profile-avatar";

import Search from "./components/body/search/search";
import VendorAccount from "./components/body/vendor-account/vendor-account";
import FinancialStatus from "./components/body/financial-status/financial-status";
import Order from "./components/body/order/order";
import Calendar from "./components/body/calendar/calendar";
import PickUpLocation from "./components/body/pick-up-location/pick-up-location";
import DropOffLocation from "./components/body/drop-off-location/drop-off-location";
import Button from "./components/button/button";
import Footer from "./components/footer/footer";
import Table from "./components/body/table/table";
import CostDetailsPage from "./components/body/CostDetailsPage/CostDetailsPage";
import { ReverseBilling } from "./data/reverseBilling";

type TableProps = {};

type TableState = {
  pageSize: number;
  // pageIndex: any[]
  totalPageNumber: number;
  currentPage: number;
  first: number;
  last: number;
  items: number;
  index: number;
  styleTable: object;
  styleCostDetailsPage: object;
};

class App extends React.Component<TableProps, TableState> {
  onClickItem: any;
  constructor(props: any) {
    super(props);
    this.state = {
      pageSize: 5,
      // pageIndex: [],
      totalPageNumber: 1,
      currentPage: 1,
      first: 1,
      last: 5,
      items: 0,
      index: 0,

      //------------------
      styleTable: {
        display: "flex",
      },
      styleCostDetailsPage: {
        display: "none",
      },
    };

    this.onClickItem = (index: number) => {
      this.setState({
        styleTable: { display: "none" },
        styleCostDetailsPage: { display: "flex" },
        index: index,
      });
    };
  }

  render() {
    return (
      <variables.Provider
        value={{
          pageSize: this.state.pageSize,
          totalPageNumber: this.state.totalPageNumber,
          currentPage: this.state.currentPage,
          first: this.state.first,
          last: this.state.last,
          items: this.state.items,
          index: this.state.index,
          onClickItem: this.onClickItem,
        }}
      >
        <div className="container">
          {/* Cost-list-page */}
          <div style={this.state.styleTable}>
            <div className="left-side-bar">
              <Logo />
              <NavBar />
              <ProfileAvatar />
            </div>
            <div className="right">
              <div className="container-cost-repository">
                <div className="Cost-repository">
                  <span className="text-lg text-color2">Cost repository</span>
                  <div className="background-cost-repository">
                    <div className="info-cost-repository">
                      <div className="search">
                        <Search />
                      </div>
                      <div className="search-criteria">
                        <span className="text-sm text-color3">
                          Search criteria
                        </span>
                        <div className="select-top">
                          <VendorAccount />
                          <FinancialStatus />
                          <Order />
                        </div>
                        <div className="select-bot">
                          <Calendar />
                          <PickUpLocation />
                          <DropOffLocation />
                        </div>
                      </div>
                    </div>
                    <div className="button">
                      <Button />
                    </div>
                  </div>
                  <div className="table">
                    <Table
                      hasCheckbox
                      headerNameList={[
                        <th id="id" className="text-sm text-color1">
                          ID
                        </th>,
                        <th id="details" className="text-sm text-color1">
                          Details
                        </th>,
                        <th id="time" className="text-sm text-color1">
                          Pick up - Drop off
                        </th>,
                        <th id="vendor" className="text-sm text-color1">
                          Vendor
                        </th>,
                        <th id="cost" className="text-sm text-color1">
                          Cost
                        </th>,
                        <th id="lastupdate" className="text-sm text-color1">
                          Last update
                        </th>,
                        <th id="status" className="text-sm text-color1">
                          Status
                        </th>,
                      ]}
                      hasSetting
                      data={ReverseBilling}
                    />
                  </div>
                </div>
                <div className="footer">
                  <Footer />
                </div>
              </div>
            </div>
          </div>

          {/* Cost-details-page */}
          <div
            className="cost-details-page"
            style={this.state.styleCostDetailsPage}
          >
            <CostDetailsPage />
          </div>
        </div>
      </variables.Provider>
    );
  }
}

export default App;
