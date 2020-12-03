import React from "react"
import FieldContext from "./FieldContext";
import userForm from "./useForm";
export default function Form({ children, form, onFinish, onFinishField },ref) {
  const [formInstance]=userForm(form)
  formInstance.setCallBack({onFinish,onFinishField})
  React.useImperativeHandle(ref, () => formInstance);
  return (
    <form
      // onClick={(e) => {
      //   // e.preventDefault();

      //   console.log(formInstance.getFieldsValue())
      // }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
}
