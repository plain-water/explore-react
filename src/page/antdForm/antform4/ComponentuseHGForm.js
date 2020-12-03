import React from "react"
import { Input, Button } from "antd";
import Form, { Field } from "./HG-rc-field-form/";
const nameRules = {required: true, message: "请输入姓名！"};
const passworRules = {required: true, message: "请输入密码！"};
export default class ComponentuseHGForm extends React.Component {
  formRef=React.createRef();
  componentDidMount(){
    this.formRef.current.setFieldsValue({username: "李鸣浩好帅"});
  }
 Finish = (e) => {
   console.log("李鸣浩真帅")
};
 FinishField = (e) => {
  //  console.error("请输入密码，密码是“李鸣浩好帅哦”");
  console.error(e);
  };
  render() {
    return (
      <div className="formContainer HGform">
        <h4>Compontent use HGForm (HG from 控件）</h4>
        <Form ref={this.formRef} onFinish={this.Finish} onFinishField={this.FinishField}>
          <Field name="username"  rules={[nameRules]}>
            <Input placeholder="please input username"/>
          </Field>
          <Field name="password"  rules={[passworRules]}>
            <Input placeholder="please input password"/>
          </Field>
          <Button onClick={()=>this.formRef.current.submit()}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
