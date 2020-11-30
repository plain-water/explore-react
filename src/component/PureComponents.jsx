import React from "react";
import { Button } from "antd";
class PureComponents extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
      counts: {
        count: 1,
      },
    };
  }
  setCount = () => {
    this.setState({ count: 100 });
  };
  setCounts = () => {
    this.setState({ counts: {
        count: 10,
      }});
  };
  render() {
    console.log("render");
    return (
      <div className="item">
        <h4>PureComponent（纯净组件）</h4>
        <p>PureComponent内置shouldComponentUpdata 比较state第一层级数据 多层级将不会比较</p>
        <p>浅比较 count:{this.state.count}</p>

        <Button type="primary" onClick={() => this.setCount()}>
          click  me
        </Button>
        <p> counts.count:{this.state.counts.count}</p>

        <Button type="primary" onClick={() => this.setCounts()}>
          click  me
        </Button>
      </div>
    );
  }
}

export default PureComponents;
