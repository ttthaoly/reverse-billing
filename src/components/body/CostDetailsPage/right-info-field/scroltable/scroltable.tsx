import React from "react";
import { variables } from "../../../../../context";

import ReversebillingDescriptionType from "../../../../../types/reversebillingDescription";
import down from "../../../../../assets/icon/Arrow Chevron.svg";
import Description from "./scroltable-description/descrition";
import Price from "./scroltable-price/price";
import Item from "./scroltable-item/item";
import link from "../../../../../assets/icon/Link Out External.svg";
import "./scroltable.css";

type ScrolTableProps = {
  hasDown?: boolean;
  headerNameList: any[];
  dataScrolTable: ReversebillingDescriptionType[];
};

type ScrolTableState = {};
class ScrolTable extends React.Component<ScrolTableProps, ScrolTableState> {
  constructor(props: ScrolTableProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { dataScrolTable, hasDown, headerNameList } = this.props;
    return (
      <variables.Consumer>
        {({}) => {
          return (
            <div className="table">
              <table>
                <thead>
                  <tr className="primary-background-color">
                    {hasDown && <th className="scrol-table"></th>}

                    {headerNameList.map((item, index, array) => {
                      return (
                        <React.Fragment key={index.toString()}>
                          {item}
                        </React.Fragment>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {dataScrolTable.map((item, index) => {
                    return (
                      <tr key={index}>
                        {hasDown && (
                          <td className="scrol-table">
                            <img src={down} alt="" />
                          </td>
                        )}
                        <>
                          <td className="item">
                            <span className="text-sm text-color8">
                              <Item itemTableType={item.itemTable} />
                            </span>
                            <img src={link} alt="" />
                          </td>
                          <td className="description">
                            <span className="text-sm text-color3">
                              <Description descriptionType={item.description} />
                            </span>
                          </td>
                          <td className="total"></td>
                          <td className="price">
                            <span className="text-sm text-color3">
                              <Price priceType={item.price} />
                            </span>
                          </td>
                        </>
                      </tr>
                    );
                  })}
                  <tr className="total-price">
                    <span className="text-sm text-color3">Total</span>
                    <span className="text-sm text-color3">150.40</span>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }}
      </variables.Consumer>
    );
  }
}

export default ScrolTable;
