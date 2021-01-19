import React, { Component } from 'react'
import matchPath from './matchPath'
import RouterContext from "./RouterContext"
export default class Switch extends Component {
    render() {
        return (
            <RouterContext.Consumer>
                {
                    context => {
                        let match;
                        let elemcnt;
                        React.Children.forEach(this.props.children, child => {
                            if (match == null) {
                                elemcnt = child;
                                match = child.props.path
                                    ? matchPath(context.location.pathname, child.props)
                                    : context.match;
                            }
                        })
                        return match ? React.cloneElement(elemcnt, {computedMatch:match}) : null
                    }
                }
            </RouterContext.Consumer>
        )
    }
}
