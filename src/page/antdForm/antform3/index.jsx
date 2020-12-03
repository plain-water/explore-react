import React, { Component } from "react";
import "../index.less";
import { Input, Button } from "antd";
import { createForm } from "rc-form";
import HGcreateForm from "./HG-rc-from";
const usernamerules = { required: true, message: "username is required" };
const passwordrules = { required: true, message: "password is required" };
class RCForm extends React.Component {
  componentDidMount() {
    this.props.form.setFieldsValue({
      username: "你猜猜",
      password: "不告诉你",
    });
    console.log(this.props.form);
  }
  submit = () => {
    const { getFieldsValue } = this.props.form;
    console.log(getFieldsValue());
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="formContainer">
        <h4>rc-from (antd3 from 控件）</h4>
        {getFieldDecorator("username", {
          rules: [usernamerules],
        })(<Input placeholder="please input username" />)}
        {getFieldDecorator("password", {
          rules: [passwordrules],
        })(<Input placeholder="please input password" />)}
        <Button type="primary" onClick={() => this.submit()}>
          登录
        </Button>
      </div>
    );
  }
}
const RCFormHoc = createForm()(RCForm);
class Antform3 extends Component {
  componentDidMount() {
    console.log();
    this.props.form.setFieldsValue({
      username: "你猜猜",
      password: "不告诉你",
    });
  }
  submit = () => {
    const { validateFields } = this.props.form;
    validateFields((type, state) => {
      console.log(type, state);
      if(type){
        type.forEach((element) => {
          console.error(element);
        });  
      }
     
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="pageContainer Antform3">
        <RCFormHoc />
        <div className="formContainer">
          <h4> HG-from (浩哥 from 控件）</h4>
          {getFieldDecorator("username", {
            rules: [usernamerules],
          })(<Input placeholder="please input username" />)}
          {getFieldDecorator("password", {
            rules: [usernamerules],
          })(<Input placeholder="please input password" />)}

          <Button type="primary" onClick={() => this.submit()}>
            登录
          </Button>
        </div>
      </div>
    );
  }
}
export default HGcreateForm(Antform3);
