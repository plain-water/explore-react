import React, { Component } from 'react'
import RouterContext from "./RouterContext"
import matchPath from "./matchPath"
export default class Route extends Component {

    render() {

        // console.log(window.location)
        return <RouterContext.Consumer>
            {context => {
                const location = context.location;
                const { children, component, render, path, computedMatch } = this.props
                const match = computedMatch
                    ? computedMatch
                    : path
                        ? matchPath(location.pathname, this.props)
                        : context.match;
                // console.log(match, path, typeof children);
                // match
                const props = {
                    ...context,
                    location,
                    match
                }
                // console.log(props)

                return (
                    <RouterContext.Provider value={props}>
                        { match
                            ? children
                                ? typeof children === "function"
                                    ? children(props)
                                    : children
                                : component
                                    ? React.createElement(component, props)
                                    : render
                                        ? render(props)
                                        : null
                            : typeof children === "function"
                                ? children(props)
                                : null}
                    </RouterContext.Provider>
                )
                // return match ? React.createElement(component) : null
            }}
        </RouterContext.Consumer>

    }
}
