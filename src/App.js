import StateMarge from "./component/StateMarge";
import PureComponents from "./component/PureComponents.jsx";
import LifeCycle  from "./component/LifeCycle.jsx";

import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      LifeCycleDetele: false,
    };
  }
  Destruction=()=>{
    this.setState({LifeCycleDetele:true})
  }
  render() {
    const { LifeCycleDetele } = this.state;
    return (
      <div className="App">
        未知知识补充
        {/* {!LifeCycleDetele && <LifeCycleBefore16 Destruction={this.Destruction}/>}
        {!LifeCycleDetele && <LifeCycleAfter16 Destruction={this.Destruction}/>} */}
        <LifeCycle/>
        <StateMarge />
        {/* <PureComponents /> */}
      </div>
    );
  }
}
