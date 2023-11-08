import React from "react";

import "./progress.css";

type Progressprop = {
  width: number;
};
type ProgressState = {
  widthProgress: object;
  widthProgressBar: object;
};
class Progress extends React.Component<Progressprop, ProgressState> {
  constructor(props: Progressprop) {
    super(props);
    this.state = {
      widthProgress: {
        width: "100%",
      },
      widthProgressBar: {
        width: "0%",
      },
    };
  }

  componentDidUpdate(prevProps: Readonly<Progressprop>, prevState: Readonly<ProgressState>, snapshot?: any): void {
    
  }
  progress = () => {
    this.setState({
      widthProgressBar: {
        width: "50%",
      },
    });
  };

  render() {
    const { widthProgress, widthProgressBar } = this.state;
    return (
      <>
        <div className="progress" style={widthProgress}>
          <div className="progress-bar" style={widthProgressBar}></div>
        </div>
      </>
    );
  }
}

export default Progress;
