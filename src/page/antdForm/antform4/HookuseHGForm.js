import React,{useEffect} from "react"
import { Input, Button } from "antd";
import Form, { Field } from "./HG-rc-field-form/";
const nameRules = {required: true, message: "请输入姓名！"};
const passworRules = {required: true, message: "请输入密码！"};

export default function HookForm(props) {
  const [form] = Form.useForm();
  useEffect(() => {
 
    form.setFieldsValue({username: "李鸣浩好帅"});
  
  });
  const Finish = (e) => {
    console.log(e);
  };
  const FinishField = (e) => {
   console.error("李鸣浩不帅嘛");
  };
  return (
    <div className="formContainer HGform">
      <h4>hook use HGForm (HG from 控件）</h4>
      <Form form={form} onFinish={Finish} onFinishField={FinishField}>
        <Field name="username"  rules={[nameRules]}>
          <Input placeholder="please input username"/>
        </Field>
        <Field name="password"  rules={[passworRules]}>
          <Input placeholder="please input password"/>
        </Field>

        <Button type="primary" onClick={()=>form.submit()}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
