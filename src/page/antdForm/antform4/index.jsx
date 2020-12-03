import React ,{useState}from "react";
import "../index.less";

import { Form, Input, Button, Row, Col } from "antd";
import HookForm from "./HookuseHGForm.js"
import ComponentuseHGForm from "./ComponentuseHGForm.js"
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
class AntdForm extends React.Component {
  formRef = React.createRef();
  onGenderChange = (value) => {
    switch (value) {
      case "male":
        this.formRef.current.setFieldsValue({
          note: "Hi, man!",
        });
        return;

      case "female":
        this.formRef.current.setFieldsValue({
          note: "Hi, lady!",
        });
        return;

      case "other":
        this.formRef.current.setFieldsValue({
          note: "Hi there!",
        });
        return;
      default:
        return "";
    }
  };
  requ;
  onFinish = (values) => {
    console.log(values);
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };
  render() {
    return (
      <Form
        {...layout}
        ref={this.formRef}
        name="control-ref"
        onFinish={this.onFinish}
        className="formContainer"
      >
        <h4>antd4from (antd4 from 控件）</h4>
        <Form.Item
          name="username"
          label="username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    );
  }
}


function HGForm() {
  
  return (
    <div>
      <Row>
        <Col span={12}>
          <HookForm />
        </Col>
        <Col span={12}><ComponentuseHGForm/></Col>
      </Row>
    </div>
  );
}

export default function Antform4() {
    const [count,setCount]=useState(0)
  return (
    <div className="pageContainer">
       <p>{count}<Button type="primary" onClick={()=>setCount(count+1)}>add</Button>
       </p> 
      <HGForm />
      <AntdForm />
    </div>
  );
}
