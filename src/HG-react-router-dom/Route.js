import React, { Component } from 'react'

export default class Route extends Component {

    render() {
        const {component,path} =this.props
        const match=window.location.pathname===path;
        // console.log(window.location)
        return match?React.createElement(component ):null
    }
}
