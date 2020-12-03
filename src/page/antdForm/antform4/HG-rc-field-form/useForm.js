import React from "react";
class FormStore {
  constructor() {
    this.store = {};
    this.FieldEntities = [];
    this.callbacks = {};
  }
  setCallBack = (newBack) => {
    this.callbacks = {
      ...this.callbacks,
      ...newBack,
    };
  };
  rulesFN = (rules, name) => {
    let err = [];
    // rules.forEach(element => {
    //   if()
    // });
    if (
      rules[0].required &&
      (this.store[name] === "" || this.store[name] === undefined)
    ) {
      err.push(rules[0].message);
    }

    return err;
  };

  setFieldsValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
    this.FieldEntities.forEach((Field) => {
      const { name } = Field.props;
      Object.keys(newStore).forEach((storeItem) => {
        if (storeItem === name) {
          Field.storeChange();
        }
      });
    });
  };

  validateFields = () => {
    let err = [];

    this.FieldEntities.forEach((Field) => {
      const { name, rules } = Field.props;
      rules.length > 0 && err.push(...this.rulesFN(rules, name));
    });
    
    return err
  };
  submit = () => {
    let err=this.validateFields();
    if (err.length > 0) {
      this.callbacks.onFinishField &&
        this.callbacks.onFinishField(err, this.store);
    } else {
      this.callbacks.onFinish && this.callbacks.onFinish(this.store);
    }
  };
  getFieldsValue = () => {
    return this.store;
  };
  getFieldValue = (name) => {
    return this.store[name];
  };
  registerField = (Field) => {
    this.FieldEntities.push(Field);
    return () => {
      this.FieldEntities = this.FieldEntities.filter((item) => item !== Field);
      delete this.store[Field.props.name];
    };
  };
  getForm() {
    return {
      setFieldsValue: this.setFieldsValue,
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      registerField: this.registerField,
      setCallBack: this.setCallBack,
      submit: this.submit,
      timeTags: new Date().getTime(),
      store: this.store,
    };
  }
}
export default function UserForm(form) {
  const formRef = React.useRef();
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
