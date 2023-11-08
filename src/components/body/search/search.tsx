import React from "react";

import "./search.css";
import Content from "../../../assets/icon/Content.svg";
class Search extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <span className="text-sm text-color3">
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
        </div>
      </>
    );
  }
}

export default Search;
