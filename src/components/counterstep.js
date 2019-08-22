import React from "react";
import "./counterstep.css";

class CounterStep extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.numberInput = React.createRef();
  // }

  changeStep = event => {
    //console.log(event.target.value);
    //let step = this.numberInput.current.value;
    let step = event.target.value;
    this.props.updateStep(step);
  };

  render() {
    return (
      <div className="step">
        <span>Krok:</span>
        <input
          type="number"
          min="1"
          value={this.props.stepCount}
          //ref={this.numberInput}
          onChange={this.changeStep}
        />
      </div>
    );
  }
}

export default CounterStep;
