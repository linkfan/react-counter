import React from "react";
import "./counterstep.css";

class CounterStep extends React.Component {
  constructor(props) {
    super(props);
    this.numberInput = React.createRef();
  }

  changeStep = () => {
    let step = this.numberInput.current.value
    this.props.updateStep(step);
  }

  render() {
    return (
      <div className="step">
        <span>Krok:</span>
        <input type="number" value={this.props.stepCount} ref={this.numberInput} onChange={this.changeStep} />
      </div>
    )
  }
}

export default CounterStep;