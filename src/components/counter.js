import React from "react";
import "./counter.css";
import ButtonsPanel from "./buttonsPanel";
import CounterStep from "./counterstep";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    if (!isNaN(this.props.initValue) || !isNaN(this.props.stepCount)) {
      this.state = {
        counterValue: parseInt(this.props.initValue),
        counterStep: parseInt(this.props.stepCount)
      };
    } else {
      this.state = {
        counterValue: this.props.initValue,
        counterStep: this.props.stepCount
      };
    }
  }

  updateStep = step => {
    this.setState({ counterStep: step });
  };

  changeValue = () => {
    this.setState(prevState => {
      return {
        counterValue: prevState.counterValue + parseInt(this.state.counterStep)
      };
    });
  };

  resetCounter = resetCounter => {
    let initValue = 0;
    let initCounter = this.state.counterStep;
    if (!resetCounter) {
      if (!isNaN(this.props.initValue) || !isNaN(this.props.stepCount)) {
        initValue = parseInt(this.props.initValue);
        initCounter = parseInt(this.props.stepCount);
      }
    }
    this.setState({
      counterValue: initValue,
      counterStep: initCounter
    });
  };

  render() {
    return (
      <div className="counter">
        <div className="inner-counter">
          Licznik:
          <span className="value">{this.state.counterValue}</span>
        </div>
        <ButtonsPanel
          stepCount={this.state.counterStep}
          changeCounterValue={this.changeValue}
          resetCounterValue={this.resetCounter}
        />
        <CounterStep
          updateStep={this.updateStep}
          stepCount={this.state.counterStep}
        />
      </div>
    );
  }
}

export default Counter;
