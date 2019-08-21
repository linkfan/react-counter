import React from "react";
import "./App.css";
//import CounterFn from "./components/counter-fn";
import Counter from "./components/counter";


function App() {
  return (
    <div>
      <div className="header">Aplikacja licznika w ReactJS</div>
      <Counter initValue="0" stepCount="1" />

    </div>
  );
}

export default App;
