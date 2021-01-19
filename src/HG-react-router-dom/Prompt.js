import RouterContext from "./RouterContext";
import React, { Component } from 'react'
export default function Prompt(when = true, message) {
    return (
        <RouterContext.Consumer>
            {
                context => {
                    console.log(when)
                    if (!when) {
                        return null;
                    }
                    let method = context.history.block;
                    return (
                        <LifeCycle
                            onMount={(self) => {
                                self.replace = method(message)
                            }}
                            onUnMount={(self) => {
                                self.replace()
                            }}
                        />
                    )
                }
            }
        </RouterContext.Consumer>
    )
}


class LifeCycle extends Component {
    componentDidMount() {
        if( this.props.onMount){
            this.props.onMount.call(this, this)
        }
    }
    componentWillUnmount() {
        this.props.onUnMount && this.props.onUnMount.call(this, this)

    }
    render() {
        return null
    }
}
