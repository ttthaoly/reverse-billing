import React from "react";
// import { v4 as uuidv4 } from "uuid";
import "./table.css";
import { variables } from "../../../context";

import SettingCog from "../../../assets/icon/Settings Cog.svg";
import Detail from "../../../assets/icon/detail.svg";
import ReversebillingType from "../../../types/reversebilling";
import Details from "./details/details";
import Pickup from "./pickup-dropoff/pickup";
import Vendor from "./vendor/vendor";
import Cost from "./cost/cost";
import LastUpdate from "./lastupdate/lastupdate";
import Status from "./status/status";
import ID from "./id/id";
import Pagination from "./pagination/pagination";

type TableProps = {
  hasCheckbox?: boolean;
  headerNameList: any[];
  hasSetting?: any;
  data: ReversebillingType[];
};

type TableState = {
  pageSize: number;
  currentPage: number;
  dataTable: any[];
};
class Table extends React.Component<TableProps, TableState> {
  // onClickCheckBox: any;
  constructor(props: TableProps) {
    super(props);
    this.state = {
      pageSize: 5,
      currentPage: 1,
      dataTable: [],
    };
  }

  onPageSizeChange = (num: number) => {
    const value = this.props.data.filter((item, index) => index < num) || [];
    console.log("value1", value);

    this.setState({ pageSize: num, dataTable: value });
  };

  onCurrentPageChange = (num: number) => {
    this.setState({ currentPage: num });
  };

  // onClickCheckBox = () => {
  //   console.log("abc");
  //   this.setState({
  //     style: { display: "none" },
  //   });
  // };

  componentDidMount(): void {
    const value = this.props.data.filter((item, index) => index < 5) || [];

    this.setState({
      dataTable: value,
    });
  }
  componentDidUpdate(
    prevProps: Readonly<TableProps>,
    prevState: Readonly<TableState>,
    snapshot?: any
  ): void {
    const { currentPage, pageSize } = this.state;
    console.log("up", currentPage, pageSize);
    const first = pageSize * (currentPage - 1);
    const last = pageSize * currentPage - 1;
    const value =
      this.props.data.filter(
        (item, index) => first <= index && index <= last
      ) || [];

    if (
      pageSize !== prevState.pageSize ||
      currentPage !== prevState.currentPage
    ) {
      this.setState({
        dataTable: value,
      });
    }
  }

  render() {
    const { data, hasCheckbox, headerNameList, hasSetting } = this.props;
    const { dataTable } = this.state;

    return (
      <variables.Consumer>
        {({ onClickItem }) => {
          return (
            <>
              <table>
                <thead>
                  <tr className="primary-background-color">
                    {hasCheckbox && (
                      <th className="checkbox-table">
                        <input type="checkbox" />
                      </th>
                    )}

                    {headerNameList.map((item, index, array) => {
                      return (
                        <React.Fragment key={index.toString()}>
                          {item}
                        </React.Fragment>
                      );
                    })}

                    {hasSetting && (
                      <th className="setting-table">
                        <img src={SettingCog} alt="SettingCog" />
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {dataTable.map((item, index) => {
                    console.log("item1", item);
                    console.log("index", index);
                    return (
                      <tr
                        key={index}
                        onClick={() => {
                          onClickItem(index);
                        }}
                      >
                        {hasCheckbox && (
                          <td className="checkbox-table">
                            <input type="checkbox" />
                          </td>
                        )}
                        <>
                          <ID idtype={item?.id || ""} />
                          <Details value={item.details} />
                          <Pickup pickUpdropOffType={item.pickUp_dropOff} />
                          <Vendor vendorType={item.vendor} />
                          <Cost costType={item.cost} />
                          <LastUpdate lastUpdateType={item.lastUpdate} />
                          <Status statusType={item.status} />

                          {/* <td>{uuidv4()}</td>
                            <td>{item.pickUp_dropOff}</td>
                            <td>{item.vendor}</td>
                            <td>{item.cost}</td>
                            <td>{item.lastUpdate}</td>
                            <td>{item.status}</td> */}
                        </>
                        {hasSetting && (
                          <td className="setting-table">
                            <img src={Detail} alt="Details" />
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <Pagination
                totalItem={data.length}
                onPageSizeChange={this.onPageSizeChange}
                onCurrentPageChange={this.onCurrentPageChange}
              />
            </>
          );
        }}
      </variables.Consumer>
    );
  }
}

export default Table;
