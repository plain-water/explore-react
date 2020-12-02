import { Input, Button } from "antd";
import Form, { Field } from "./HG-rc-field-form/";
export default function HookForm() {
  const [form] = Form.useForm();
  
  const Finish = (e) => {
    console.log(e);
  };
  const FinishField = (e) => {
    console.log(e);
  };
  return (
    <div className="formContainer HGform">
      <h4>hook use HGForm (HG from 控件）</h4>
      <Form form={form} onFinish={Finish} onFinishField={FinishField}>
        <Field>
          <Input placeholder="please input username"/>
        </Field>
        <Field>
          <Input placeholder="please input password"/>
        </Field>

        <Button type="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}
