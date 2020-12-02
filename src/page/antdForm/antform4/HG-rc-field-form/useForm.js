import React from 'react'

export default function userForm(params) {
    const formRef=React.useRef();
    if(!formRef.currnet){
        console.log(1)
        formRef.currnet=1;
    }
    return [formRef.currnet];
}