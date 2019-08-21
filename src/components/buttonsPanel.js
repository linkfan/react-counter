import React from "react";
import "./buttonsPanel.css";

class ButtonsPanel extends React.Component {
  resetOrReinitCounter = reset => {
    this.props.resetCounterValue(reset);
    //console.log(reset);
  };

  render() {
    return (
      <div className="buttons">
        <button onClick={this.props.changeCounterValue}>Add {this.props.stepCount}</button>
        <button onClick={() => this.resetOrReinitCounter(false)}>Reinit</button>
        <button onClick={() => this.resetOrReinitCounter(true)}>Reset</button>
      </div>
    );
  }
}

export default ButtonsPanel;
