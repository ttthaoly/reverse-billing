import React from "react";

import "./button.css";

class Button extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <button className="btn btn-solid2">Reset</button>
        <button className="btn btn-solid1">Search</button>
      </>
    );
  }
}

export default Button;
