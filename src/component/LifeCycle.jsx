import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Tabs } from "antd";
class LifeCycleBefore16 extends Component {
  static defaultProps = {
    name: "李鸣浩",
  };
  static propTypes = {
    name: PropTypes.string.isRequired,
  };
  constructor() {
    super();
    this.state = {
      count: 1,
      Destruction: false,
    };
  }
  componentWillMount() {
    console.log("componentWillMount组件即将第一次挂载 （render）");
  }
  componentDidMount() {
    console.log("componentDidMount组件第一次挂载完成 （render）");
  }
  shouldComponentUpdate(np, ns) {
    console.log(
      "shouldComponentUpdate 组件即将更新props||state,return true;将会更新组件 false将不回更新",
      np,
      ns
    );
    if (ns.count > 2 && ns.count % 2 !== 0) {
      return false;
    }
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  setCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("render");
    const { props, setCount } = this;
    const { count, Destruction } = this.state;
    return (
      <div>
        <h6>生命周期（Life Cycle Before 16）</h6>
        <p>props {props.name}-举世无双</p>
        <p>count:{count}</p>

        {!Destruction && <Child count={count}/>}
        <Button type="primary" onClick={() => setCount()}>
          click Me
        </Button>
        {!Destruction && (
          <Button
            type="primary"
            onClick={() => this.setState({ Destruction: true })}
          >
            Click me 大义灭亲 销毁逆子1号
          </Button>
        )}
      </div>
    );
  }
}

class Child extends Component {
  componentWillReceiveProps(nextProps){
    console.log("爸爸更新了props "+nextProps)
  }
  componentWillUnmount() {
    console.log("componentWillUnmount 我是逆子1号 我被老不死的干掉了");
  }
  render() {
  return <div>我是逆子1号 爸爸的count:{this.props.count}</div>;
  }
}

class LifeCycleAfter16 extends Component {
  static defaultProps = {
    name: "李鸣浩",
  };
  static propTypes = {
    name: PropTypes.string.isRequired,
  };
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps");
    return null
  }
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  componentDidMount() {
    console.log("componentDidMount组件第一次挂载完成 （render）");
  }
  shouldComponentUpdate(np, ns) {
    console.log(
      "shouldComponentUpdate 组件即将更新props||state,return true;将会更新组件 false将不回更新",
      np,
      ns
    );
    if (ns.count > 2 && ns.count % 2 !== 0) {
      return false;
    }
    return true;
  }
  getSnapshotBeforeUpdate(){
    console.log("说呀 耶斯莫拉 说啥～")
    return {
      type:"说",
      msg:"耶斯莫拉"
    }
  }
  componentDidUpdate(p,s,snaps) {
    console.log("componentDidUpdate",snaps.msg);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
 
  setCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("render");
    const { props, setCount } = this;
    const { count } = this.state;
    return (
      <div>
        <h6>生命周期（Life Cycle After 16）</h6>
        <p>props {props.name}-举世无双</p>
        <p>count:{count}</p>
        <Child2 count={count}/>
        <Button type="primary" onClick={() => setCount()}>
          click Me
        </Button>
       
      </div>
    );
  }
}

class Child2 extends Component {
  static getDerivedStateFromProps(props,state){
    if(props.count%3===0){
      return {
        ...props
      }
    }
    return null
  }
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }
  render() {
    return (
      <div>
        I m 逆子二号 我的count:{this.state.count}
      </div>
    );
  }
}


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const LifeCycle = () => (
  <div className="item">
    <h4>生命周期（Life Cycle）</h4>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="LifeCycleBefore16" key="2">
        <LifeCycleBefore16 />
      </TabPane>
      <TabPane tab="LifeCycleAfter16" key="1">
        <LifeCycleAfter16 />
      </TabPane>
    </Tabs>
  </div>
);
export { LifeCycleBefore16, LifeCycleAfter16 };
export default LifeCycle;
