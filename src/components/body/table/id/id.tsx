import React from "react";

import { type } from "os";
import { idType } from "../../../../types/reversebilling";
import link from "../../../../assets/icon/Link Out External.svg";
// import styled from "styled-components";
import "./id.css";

type IDprop = {
  idtype?: idType;
};

class ID extends React.Component<IDprop> {
  constructor(props: IDprop) {
    super(props);
    this.state = {};
  }

  render() {
    const { idtype } = this.props;
    return (
      <>
        <td className="id">
          <div className="">
            <a className="text-sm text-color8">{`${idtype?.a}`}</a>
            <img src={link} alt="link" />
          </div>
          <div>
            <span className="text-sm text-color6">{`Order:`}</span>
            <a className="text-sm text-color8">{`${idtype?.order}`}</a>
            <img src={link} alt="link" />
          </div>
        </td>
      </>
    );
  }
}

export default ID;
