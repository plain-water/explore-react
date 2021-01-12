import React, { Component } from 'react'
import Router from "./Router"
export default class BrowserRouter extends Component {
    render() {
        return <Router children={this.props.children}/>
    }
}
