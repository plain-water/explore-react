import React, { Component } from 'react'
import { Button } from "antd"
export default class StateMarge extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    

    componentDidMount() {
        document.getElementById("button").addEventListener("click", this.SetCouter)
        // setTimeout(this.SetCouter,0)
        //在定时器与原生事件中setState是同步的
        //在生命周期与合成事件中是异步的，

        //不合并setState()即第一个参数为一个函数返回一个对应修改的state
        



        //个人理解同步即为不合并setState()（）、异步即合并setState(）
    
    }
    changeVlaue = (v) => {
        this.setState({
            counter: this.state.counter + v
        }, () => {
            console.log("state change callback log ", this.state.counter)
        })
        console.log("state synchro log", this.state.counter);
    }
    changeVlaueNotMarge = (v) => {
        this.setState((state)=>{
            return {counter:state.counter+v}
        }, () => {
            console.log("NotMarge state change callback log ", this.state.counter)
        })
        console.log("NotMarge state synchro log", this.state.counter);
    }
    SetCouter = () => {
        this.changeVlaue(1)
        this.changeVlaue(2)
    }
    SetCouteNotMarge = () => {
        this.changeVlaueNotMarge(1)
        this.changeVlaueNotMarge(2)
    }
    render() {
        const { counter } = this.state;

        return (
            <div  className="item">
                <h4>setState</h4>
                <p>合并成新 counter{counter}</p>
                <Button type="default" id="button">原生事件click Me</Button>
                <Button type="default" onClick={() => this.SetCouter()}>合成事件click Me</Button>
                <Button type="default" onClick={() => this.SetCouteNotMarge()}>不合并更新click Me</Button>

            </div>
        )
    }
}
