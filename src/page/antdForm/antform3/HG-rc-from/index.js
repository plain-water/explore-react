// class createForm{


// }
import React, { Component } from 'react'
const HGcreateForm = (Comp) => {
    return class componentName extends Component {
        constructor(props) {
            super(props)
            this.state = {}
            this.options = []
        }
        setFieldsValue = (FieldsValue) => {
            // return this.state;
            this.setState(FieldsValue)
        }
        validateFields = (callback) => {
            let err = [];
            // this.options. forEach
            const { options } = this;
            const { state } = this;
            console.log(state)
            for (const key in options) {
                if (state[key] === undefined || state[key] === "") {
                    err.push(
                        {
                            [key]: options[key].rules[0].message
                        }
                    )
                }
            }
            if (err.length > 0) {
                callback(err, this.state)
            } else {
                callback(null, this.state)
            }
        }
        getFieldValue = (name) => {
            return this.state[name];
        }
        getFieldsValue = () => {
            return this.state;
        }
        handChange = (e) => {
            const { name, value } = e.target;
            this.setState({ [name]: value })
        }
        getFieldDecorator = (fieldName, option) => FormItem => {
            this.options[fieldName] = option;
            return React.cloneElement(
                FormItem,
                {
                    name: fieldName,
                    value: this.state[fieldName] || "",
                    onChange: this.handChange
                })
        }
        getForm = () => ({
            setFieldsValue: this.setFieldsValue,
            getFieldsValue: this.getFieldsValue,
            getFieldValue: this.getFieldValue,
            getFieldDecorator: this.getFieldDecorator,
            validateFields: this.validateFields

        })
        render() {
            const form = this.getForm()
            return <Comp {...this.props} form={form} />
        }
    }


}
export default HGcreateForm