import React, { Component } from 'react'

import FieldContext from "./FieldContext"
export default class Field extends Component {
    static contextType=FieldContext;
    componentDidMount(){
        this.cancellation=this.context.registerField(this)
    }
    cpmponentWillUnmount(){
        this.cancellation()
    }
    storeChange=()=>{
        this.forceUpdate()
    }
    getControlled=()=>{
        const {getFieldValue,setFieldsValue}=this.context;
        const {name} =this.props;
        return {
            value:getFieldValue(name),
            onChange:(e)=>{
                setFieldsValue({[name]:e.target.value})
            }
        }
    }
    render() {
        return React.cloneElement(this.props.children,this.getControlled())
    }
}
